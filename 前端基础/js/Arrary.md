# 扁平化
- Array.prototype.flat(Infinity)
- JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']');