<template>
  <div class="GitHub">
    <!-- 标题 -->
    <div class="title">
      <span>{{ title }}</span>
    </div>
    <!-- 内容 -->
    <section
      class="main w"
      :class="column ? column : ''"
      v-for="(item, index) in dataList"
      :key="index"
    >
      <div class="title">{{ item.title }}</div>
      <main class="content">
        <article
          v-for="(artItem, artIndex) in item.articleList"
          :key="artIndex"
        >
          <div class="title">{{ artItem.title }}</div>
          <p
            class="text"
            v-for="(text, textIndex) in artItem.text"
            :key="textIndex"
          >
            <span class="title" v-html="text.title"></span>
            <!-- {{ text.value }} -->
            <span v-html="text.value"></span>
          </p>
          <div v-if="artItem.imgUrl">
            <img
              class="img"
              v-for="(url, i) in artItem.imgUrl"
              :key="i"
              :src="url"
            />
          </div>
        </article>
      </main>
    </section>
    <a
      href="#"
      style="
        position: fixed;
        top: 80px;
        left: 10px;
        width: 80px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        text-decoration: none;
        background-color: #f40;
        border-radius: 5px;
        padding: 10px;
        letter-spacing: 2px;
        font-weight: 700;
        color: yellow;
      "
      >回到顶部</a
    >
    <el-button
      type="primary"
      @click="() => (column = column == '' ? 'column2' : '')"
      style="position: fixed; top: 20px; left: 10px"
      >切换列数</el-button
    >
  </div>
</template>

<script>
export default {
  name: "GitHub",
  data() {
    return {
      column: "",
    };
  },
  props: ["title", "dataList"],
};
</script>

<style scoped lang="scss">

.GitHub {
  > .title {
    margin: 20px 0;
    text-align: center;
    color: black;
    font-size: 32px;
    font-weight: 700;
  }

  .main {
    &.column2 {
      width: 80%;
      column-count: 2;
      column-width: 700px;
    }
    margin-top: 20px;
    padding: 20px;
    border: 1px dashed green;
    > .title {
      color: blue;
      font-size: 26px;
    }
    .content {
      article {
        .title {
          color: red;
          font-size: 22px;
          margin: 10px 0;
        }
        .text {
          font-family: "楷体";
          font-size: 18px;
          color: green;
          .title {
            display: block;
            color: goldenrod;
            font-size: 20px;
          }
        }
        div > img {
          margin: 5px 0;
          display: block;
          height: 500px;
          max-width: 100%;
          //   width: 800px;
          border: 1px solid black;
        }
      }
    }
  }
}
</style>
