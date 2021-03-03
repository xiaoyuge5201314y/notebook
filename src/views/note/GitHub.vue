<template>
  <div class="GitHub">
    <temp :dataList="dataList" :title="title"></temp>
  </div>
</template>

<script>
import img1 from "@/assets/image/note/1.png";
import img2 from "@/assets/image/note/2.png";
import img3 from "@/assets/image/note/3.png";
import img4 from "@/assets/image/note/4.png";
import img5 from "@/assets/image/note/5.png";
export default {
  name: "GitHub",
  components: {
    Temp: () => import("@/views/note/comp/Temp.vue"),
  },
  data() {
    return {
      title: "GitHub的使用",
      dataList: [
        {
          title: "一. 使用的目的",
          articleList: [{ text: [{ value: "使用github托管项目" }] }],
        },
        {
          title: "二. 基本概念",
          articleList: [
            {
              title: "仓库（Repository）",
              text: [
                {
                  value:
                    "仓库用来存放项目代码，每个项目对应一个仓库，多个开源项目则有多个仓库",
                },
              ],
            },
            {
              title: "收藏（Star）",
              text: [{ value: "收藏项目，方便下次查看" }],
            },
            {
              title: "复制克隆项目（Fork）",
              text: [
                { value: "复制一个别人的项目到自己的仓库，该项目仓库独立存在" },
              ],
            },
            {
              title: "发起请求(Pull Request)",
              text: [
                {
                  value:
                    "基于Fork，在别人的项目上做出改进 可以发送合并请求，需要项目原始人同意 就可以将项目合并",
                },
              ],
            },
            {
              title: "关注（watch）",
              text: [{ value: "关注了一个项目 该项目发生改变的时候会通知你" }],
            },
            {
              title: "事务卡片（Issue）",
              text: [],
            },
            {
              title: "github主页",
              text: [{ value: "github主页" }],
            },
            {
              title: "仓库主页",
              text: [{ value: "项目代码，版本，收藏关注fork等" }],
            },
            {
              title: "个人主页",
              text: [{ value: "个人信息" }],
            },
          ],
        },
        {
          title: "三. 注册GitHub账号",
          articleList: [
            {
              title: "注册",
              imgUrl: [img1, img2, img3],
              text: [{ value: "用户名，密码，邮箱" }],
            },
            {
              title: "邮箱设置",
              text: [{ value: "将github添加到qq邮箱的反垃圾白名单中" }],
            },
          ],
        },
        {
          title: "四. 创建仓库/创建新的项目",
          articleList: [
            {
              title: "创建仓库",
              imgUrl: [img4],
            },
            {
              title: "仓库主页",
              imgUrl: [img5],
            },
          ],
        },
      ],
    };
  },

};
</script>

<style scoped lang="scss">

</style>
