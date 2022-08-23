class MyPromise {
    static PENDING = 'pending'
    static FULFILLED = 'resolved'
    static REJECTED = 'rejected'

    successFn = []
    rejectFn = []
    value = null
    reason = null
    state = MyPromise.PENDING
    constructor(fn) {
        try {
            fn(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }

    resolve(value) {
        if (MyPromise.PENDING !== this.statue) {
            return
        }
        setTimeout(() => {

            this.state = MyPromise.FULFILLED
            this.value = value
            while (this.successFn.length) {
                this.successFn[0](this.value)
            }
        });
    }

    reject(reason) {
        if (MyPromise.PENDING !== this.statue) {
            return
        }
        setTimeout(() => {
            
            this.state = MyPromise.REJECTED
            this.reason = reason
            while (this.successFn.length) {
                this.successFn[0](this.reason)
            }
        });
    }

    then(onFulfilled, onRejected) {

        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };

        // console.log(onFulfilled)

        let p = new MyPromise((resolve, reject) => {
            console.log(this.state)

            if (this.state === MyPromise.FULFILLED) {
                try {
                    const x = onFulfilled(this.value);
                    resolvePromise(p, x, resolve, reject)
                } catch (error) {
                    this.reject(error)
                }
            }

            if (this.state === MyPromise.REJECTED) {
                try {
                    const x = onRejected(this.reason);
                    resolvePromise(p, x, resolve, reject)
                } catch (error) {
                    this.reject(error)
                }
            }

            if (this.state === MyPromise.PENDING) {
                this.successFn.push(() => {
                    try {
                        const x = onFulfilled(this.value);
                        resolvePromise(p, x, resolve, reject)
                    } catch (error) {
                        this.reject(error)
                    }
                })
                this.rejectFn.push(() => {
                    try {
                        const x = onRejected(this.reason);
                        resolvePromise(p, x, resolve, reject)
                    } catch (error) {
                        this.reject(error)
                    }
                })
            }
        })
        return p;
    }
}

function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) {
        return reject(new TypeError('不能返回自身'))
    }
    if (x instanceof MyPromise) {
        if (x.state === MyPromise.PENDING) {
            x.then(res => {
                resolvePromise(promise, res, resolve, reject)
            }, reject)
        } else if (x.state === MyPromise.FULFILLED) {
            resolve(x.value);
        } else if (x.state === MyPromise.REJECTED) {
            reject(x.reason);
        }

    } else {
        return resolve(x);
    }

}

MyPromise.deferred = function () {
    let result = {};
    result.promise = new MyPromise((resolve, reject) => {
        result.resolve = resolve;
        result.reject = reject;
    });
    return result;
}

module.exports = MyPromise;