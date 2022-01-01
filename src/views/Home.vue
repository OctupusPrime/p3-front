<template>
  <div class="box-content mx-auto max-w-5xl w-[95%] py-14">
    <div class="rounded-2xl bg-white py-14 pr-20">
      <div class="pl-[17%]">
        <h1 class="text-4xl font-semibold text-blue-500">Міжнародна конференція P3M</h1>
        <h3 class="text-2xl font-medium mt-4">Заявка на участь</h3>
        <p class="mt-2">Якщо ви тупий - дивитесь <a href="/">приклад</a></p>
      </div>
      <div class="flex mt-10">
        <div class="left-line w-[20%]">
          <div class="absolute left-[50%] bottom-0 translate-x-[-50%] pb-[11px] bg-white">
            <font-awesome-icon icon="flag-checkered" class="text-3xl"/>
          </div>
        </div>
        <div class="w-full">
          <form>
            <h2 class="paragraph-title" data-paragraph-index="1">Дані про тезу</h2>
            <div class="percent-wrap" data-pervent-val="30%">
              <p class="mt-2">
                <font-awesome-icon icon="exclamation-triangle" class="mr-2.5"/>Усі поля є обов’язковими для заповнення
              </p>
              <div class="flex gap-6 mt-6">
                  <BaseInput  name="theseName"
                              placeholder="Назва тези"/>
                  <BaseInput  name="theseNameEng"
                              placeholder="Назва тези англійською"/>      
              </div>
              <BaseResizeTextArea class="mt-6"
                                  name="summary"
                                  minHeight="100"
                                  maxHeight="200"
                                  placeholder="Анотація(6-7 рядків)"/>
              <BaseResizeTextArea class="mt-6"
                                  name="summaryEng"
                                  minHeight="100"
                                  maxHeight="200"
                                  placeholder="Анотація англ. мовою"/>                   
              <BaseResizeTextArea class="mt-6"
                                  name="keyWords"
                                  minHeight="100"
                                  maxHeight="200"
                                  placeholder="Ключові слова(6-7 слів)"/>              
              <BaseResizeTextArea class="mt-6"
                                  name="keyWordsEng"
                                  minHeight="100"
                                  maxHeight="200"
                                  placeholder="Ключові слова англ. мовою"/> 
            </div>
            <h2 class="paragraph-title mt-8" data-paragraph-index="2">Інформація про авторів</h2>
            <div class="percent-wrap" data-pervent-val="90%">
              <p class="mt-2">
                <font-awesome-icon icon="exclamation-triangle" class="mr-2.5"/>Усі поля є обов’язковими для заповнення
              </p>   
              <AddAuthor :maxAuthors="3"/>
            </div>
            <h2 class="paragraph-title mt-8" data-paragraph-index="3">Прикрепіть файл</h2>
              <p class="mt-6">Прикладіть файл з тезами, оформлений згідно з <a href="/">шаблоном</a></p>
              <p class="mt-2">Формати: doc, docx.</p>
              <div class="percent-wrap mt-6" data-pervent-val="100%">
                <BaseInputFile  name="uplaodFile"/>
              </div>
              <BaseButton class="mt-8" 
                  title="Відправити"
                  type="submit"/>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseResizeTextArea from '@/components/BaseResizeTextArea.vue'
import BaseInputFile from '@/components/BaseInputFile.vue'
import AddAuthor from '@/components/AddAuthor.vue'

export default defineComponent({
  name: 'Home',
  components: {
    BaseInput,
    BaseResizeTextArea,
    BaseInputFile,
    BaseButton,
    AddAuthor
  },
  setup() {
  }
})
</script>

<style scoped>
.paragraph-title {
  @apply text-3xl font-medium relative;
}
.paragraph-title::before {
  content: attr(data-paragraph-index);
  @apply absolute top-[50%] left-[-10%] translate-x-[-50%] translate-y-[-50%]
  text-5xl bg-white;
}
.left-line {
  @apply relative;
}
.left-line::before {
  content: '';
  @apply absolute top-0 bottom-0 left-[50%] translate-x-[-50%] border-dotted border-l-4 border-gray-400;
}
.percent-wrap {
  @apply relative;
}
.percent-wrap::before {
  content: attr(data-pervent-val);
  @apply absolute top-[50%] left-[-10%] translate-x-[-50%] translate-y-[-50%] bg-white text-gray-500;
}
</style>