<template>
  <div>
    <div class="news-component-header">
      <div class="news-image-wrapper">
        <img :src="item.image" :alt="item.title">
      </div>
    </div>
    <div class="news-component-footer">
      <h3 class="news-description">{{item.title}}</h3>
      <div class="news-date">{{item.date}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
};
</script>

<style>

.news-image-wrapper {
  line-height: 100%;
  max-height: 100%;
  max-width: 100%;
}

img {
  max-height: 100%;
  max-width: 100%;
}

.news-component-header {
  align-items: center;
  border: 2px solid lightgrey;
  border-bottom: none;
  display: flex;
  justify-content: center;
  height: 50%;
}

.news-component-footer {
  border: 2px solid lightgrey;
  display: flex;
  flex-direction: column;
  height: 50%;
}

.news-description {
  margin: 10px;
}

.news-date {
  align-self: flex-end;
  color: grey;
  font-size: 14px;
  margin-right: 10px;
}

</style>

