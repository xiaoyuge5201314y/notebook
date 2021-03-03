<template>
  <div class="Git">
    <temp :dataList="dataList" :title="title"></temp>
  </div>
</template>

<script>
import img6 from "@/assets/image/note/6.png";
import img7 from "@/assets/image/note/7.png";
import img8 from "@/assets/image/note/8.png";
import img9 from "@/assets/image/note/9.png";
import img10 from "@/assets/image/note/10.png";
import img11 from "@/assets/image/note/11.png";
import img12 from "@/assets/image/note/12.png";
export default {
  name: "Git",
  components: {
    Temp: () => import("@/views/note/comp/Temp.vue"),
  },
  data() {
    return {
      title: "Git的使用",
      dataList: [
        {
          title: "一. 使用的目的",
          articleList: [{ text: [{ value: "使用git管理github托管项目" }] }],
        },
        {
          title: "二. 下载和安装",
          articleList: [
            {
              title: "直接去官网下载64位exe文件 网址：",
              text: [
                {
                  value: `<a href='https://www.git-scm.com/download/win'>https://www.git-scm.com/download/win</a>`,
                },
                { value: "打开安装包 一直下一步" },
              ],
              imgUrl: [img6, img7],
            },
            {
              title: "安装成功",
            },
          ],
        },
        {
          title: "三. 使用Git",
          articleList: [
            {
              title: "工作区域概念",
              imgUrl: [img9],
            },
            {
              title: "流程",
              imgUrl: [img10],
            },
          ],
        },
        {
          title: "四. Git常用命令",
          articleList: [
            {
              title: "基本信息设置",
              text: [
                {
                  title:
                    "设置用户名和邮箱 都是唯一的 注意：github会显示谁提交了文件",
                  value: `<pre>git config --global user.name 用户名<br>git config --global user.email 邮箱</pre>`,
                },
                {
                  title: "查看用户信息",
                  value: `<pre>git config --list</pre>`,
                },
                {
                  title: "修改用户信息",
                  value: `<pre>git config --global --replace-all user.name 用户名<br>git config --global --replace-all user.email 邮箱</pre>`,
                },
              ],
            },
            {
              title: "git本地命令",
              text: [
                {
                  title: "初始化git 右键文件 打开git命令行工具",
                  value: `<pre>git init</pre>`,
                },
                {
                  title: "查看文件状态",
                  value: `<pre>git status</pre>`,
                },
                {
                  title: "将文件添加到暂存区",
                  value: `<pre>git add 文件名/.(点表示所有文件)</pre>`,
                },
                {
                  title: "将暂存区所有文件提交到仓库",
                  value: `<pre>git commit -m 提交信息</pre>`,
                },
                {
                  title: "查看提交记录",
                  value: `<pre>git log</pre>`,
                },
                {
                  title: "用暂存区中的文件覆盖到工作区的文件",
                  value: `<pre>git checkout 文件名</pre>`,
                },
                {
                  title: "从暂存区中删除文件",
                  value: `<pre>git rm -cached 文件名</pre>`,
                },
                {
                  title:
                    "将git仓库中指定的更新记录恢复出来，并且覆盖暂存区和工作目录",
                  value: `<pre>git reset --hard commit 指定的id</pre>`,
                },
              ],
            },
            {
              title: "管理远程仓库",
              text: [
                {
                  title: "将远程仓库的项目克隆到本地",
                  value: `<pre>git clone 远程仓库http地址</pre>`,
                },
                {
                  title: "拉取远程仓库最新的版本",
                  value: `<pre>git pull 远程仓库http地址 分支名称</pre>`,
                },
                {
                  title:
                    "将本地仓库同步到git远程仓库中（-u能记住地址 下次直接git push即可）",
                  value: `<pre>git push 远程仓库http地址<br>git push -u 远程仓库地址别名 分支名称</pre>`,
                },
                {
                  title: "添加远程仓库地址",
                  value: `<pre>git remote add 远程仓库地址别名 远程仓库地址<pre/>`,
                },
                {
                  title: "配置权限 防止恶搞 打开.git/config文件",
                  value: `<pre>[remote "origin"] url = https//用户名:密码@github.com/用户名/仓库名.git<pre/><br/><img src=${img11} />`,
                },
              ],
            },
            {
              title: "分支",
              text: [
                {
                  title: "查看分支",
                  value: "<pre>git branch<pre/>",
                },
                {
                  title: "创建分支",
                  value: "<pre>git branch 分支名称<pre/>",
                },
                {
                  title: "切换分支",
                  value: "<pre>git checkout 分支名称<pre/>",
                },
                {
                  title: "合并分支",
                  value: "<pre>git merge 来源分支<pre/>",
                },
                {
                  title:
                    "删除分支（如果没有分支合并 不能删除分支 -D可以强制删除）",
                  value: "<pre>git branch -d/-D 分支名称<pre/>",
                },
                {
                  title: "存储临时改动",
                  value: "<pre>git stash<pre/>",
                },
                {
                  title: "恢复改动",
                  value: "<pre>git stash pop<pre/>",
                },
              ],
            },
            {
              title: "生成公钥",
              text: [
                {
                  value: "ssh-keygen -t rsa -C GitHub账号",
                  title:
                    "cat+公钥路径，把出现的key复制在github上添加刚刚生成的公钥",
                },{
                  value:`<img src=${img12}/>`
                }
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style  lang="scss" scoped>
</style>
