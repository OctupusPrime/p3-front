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
            <font-awesome-icon icon="check" class="text-3xl"/>
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
                  <BaseInput  name="Name"
                              placeholder="Назва тези"/>
                  <BaseInput  name="Name2"
                              placeholder="Назва тези англійською"/>      
              </div>
              <BaseResizeTextArea class="mt-6"
                                  name="Name3"
                                  minHeight="100"
                                  maxHeight="200"
                                  placeholder="Анотація(6-7 рядків)"/>
              <BaseResizeTextArea class="mt-6"
                                  name="Name4"
                                  minHeight="100"
                                  maxHeight="200"
                                  placeholder="Анотація англ. мовою"/>                   
              <BaseResizeTextArea class="mt-6"
                                  name="Name5"
                                  minHeight="100"
                                  maxHeight="200"
                                  placeholder="Ключові слова(6-7 слів)"/>              
              <BaseResizeTextArea class="mt-6"
                                  name="Name5"
                                  minHeight="100"
                                  maxHeight="200"
                                  placeholder="Ключові слова англ. мовою"/> 
            </div>
            <h2 class="paragraph-title mt-8" data-paragraph-index="2">Інформація про авторів</h2>
            <div class="percent-wrap" data-pervent-val="90%">
              <p class="mt-2">
                <font-awesome-icon icon="exclamation-triangle" class="mr-2.5"/>Усі поля є обов’язковими для заповнення
              </p>   
              <h3 class="mt-6">Автор 1</h3>
              <div class="grid grid-cols-3 gap-x-5 gap-y-6 mt-6">
                  <BaseInput  name="Name6"
                              placeholder="Ім’я"/>
                  <BaseInput  name="Name7"
                              placeholder="Прізвище"/>  
                  <BaseInput  name="Name8"
                              placeholder="По батькові"/>
                  <BaseInput  name="Name9"
                              placeholder="Ім’я англ."/>  
                  <BaseInput  name="Name10"
                              placeholder="Прізвище англ."/>
              </div>
              <div class="grid grid-cols-2 gap-6 mt-6">
                  <BaseInput  name="Name11"
                              placeholder="Наукова ступінь"/>
                  <BaseInput  name="Name12"
                              placeholder="Вчене звання"/>  
                  <BaseInput  name="Name13"
                              placeholder="Посада, місце роботи, навчання"/>
                  <BaseInput  name="Name14"
                              placeholder="Освітньо-кваліфікаційний рівень"/>  
                  <BaseInput  name="Name15"
                              placeholder="Кафедра, факультет, ВНЗ"/>
                  <BaseInput  name="Name16"
                              placeholder="Спеціальність"/>
              </div>
                  <BaseInput  class="mt-6"
                              name="Name17"
                              placeholder="Назва доповіді"/>
              <div class="flex gap-6 mt-6">
                  <BaseInput  name="Name18"
                              placeholder="Телефон"/>
                  <BaseInput  name="Name19"
                              placeholder="Email"/>      
              </div>        
              <BaseButton class="mt-8"/>
            </div>
            <h2 class="paragraph-title mt-8" data-paragraph-index="3">Прикрепіть файл</h2>
            <div class="percent-wrap" data-pervent-val="100%">
              <p class="mt-4 pt-2">Прикладіть файл з тезами, оформлений згідно з <a href="/">шаблоном</a></p>
              <p class="mt-2">Формати: doc, docx.</p>
              <BaseInputFile  class="mt-6"
                              name="Name20"/>
              <br/>
              <BaseButton class="mt-8"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseResizeTextArea from '@/components/BaseResizeTextArea.vue'
import BaseInputFile from '@/components/BaseInputFile.vue'
import BaseButton from '@/components/BaseButton.vue'

export default defineComponent({
  name: 'Home',
  components: {
    BaseInput,
    BaseResizeTextArea,
    BaseInputFile,
    BaseButton
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
  @apply absolute top-0 bottom-0 left-[50%] translate-x-[-50%] border-dotted border-l-4 border-gray-500;
}
.percent-wrap {
  @apply relative;
}
.percent-wrap::before {
  content: attr(data-pervent-val);
  @apply absolute top-[50%] left-[-10%] translate-x-[-50%] translate-y-[-50%] bg-white text-gray-500;
}
</style>