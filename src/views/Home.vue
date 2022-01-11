<template>
  <ModalWindow v-if="ServerError">
    <h2 class="text-red-500 text-3xl font-medium">Сервер не відповідає</h2>
    <p class="mt-6 text-xl">Спробуйте зайти пізніше або перезавантажити сторінку.</p>
  </ModalWindow>
  <div class="box-content mx-auto max-w-5xl w-[95%] py-14">
    <div class="rounded-2xl bg-white py-14  lg:pr-20 lg:pl-0 md:pr-10 md:pl-0 px-5">
      <div class="md:pl-[17%]">
        <h1 class="text-4xl font-semibold text-blue-500">Міжнародна конференція P3M</h1>
        <h3 class="text-2xl font-medium mt-4">Заявка на участь</h3>
        <p class="mt-2">Якщо ви тупий - дивитесь <a href="/">приклад</a></p>
      </div>
      <div class="flex mt-10">
        <div class="left-line w-[20%] md:block hidden">
          <div class="absolute left-[50%] bottom-0 translate-x-[-50%] pb-[11px] bg-white">
            <font-awesome-icon icon="flag-checkered" class="text-3xl"/>
          </div>
        </div>
        <div class="w-full">
          <form @submit.prevent="sendForm" @keydown.enter.prevent>
            <h2 class="paragraph-title" data-paragraph-index="1">Дані про тезу</h2>
            <div class="percent-wrap" data-pervent-val="30%">
              <p class="mt-2">
                <font-awesome-icon icon="exclamation-triangle" class="mr-2.5"/>
                Поля з <span class="text-red-700 font-bold">*</span> є обов’язковими для заповнення
              </p>
              <BaseInput  class="mt-6"
                          name="theseName"
                          placeholder="Назва тези"
                          v-model="reqBody.theseName"
                          required="required"/>
              <BaseInput  class="mt-6"
                          name="theseNameEng"
                          placeholder="Назва тези англійською"
                          v-model="reqBody.theseNameEng"
                          required="required"/>      
              <BaseResizeTextArea class="mt-6"
                                  name="summary"
                                  minHeight="100"
                                  maxHeight="200"
                                  placeholder="Анотація(6-7 рядків)"
                                  v-model="reqBody.summary"
                                  required="required"/>
              <BaseResizeTextArea class="mt-6"
                                  name="summaryEng"
                                  minHeight="100"
                                  maxHeight="200"
                                  placeholder="Анотація англ. мовою"
                                  v-model="reqBody.summaryEng"
                                  required="required"/>                   
              <BaseResizeTextArea class="mt-6"
                                  name="keyWords"
                                  minHeight="100"
                                  maxHeight="200"
                                  placeholder="Ключові слова(6-7 слів)"
                                  v-model="reqBody.keyWords"
                                  required="required"/>              
              <BaseResizeTextArea class="mt-6"
                                  name="keyWordsEng"
                                  minHeight="100"
                                  maxHeight="200"
                                  placeholder="Ключові слова англ. мовою"
                                  v-model="reqBody.keyWordsEng"
                                  required="required"/> 
            </div>
            <h2 class="paragraph-title mt-8" data-paragraph-index="2">Інформація про авторів</h2>
            <div class="percent-wrap" data-pervent-val="90%">
              <p class="mt-2">
                <font-awesome-icon icon="exclamation-triangle" class="mr-2.5"/>
                Поля з <span class="text-red-700 font-bold">*</span> є обов’язковими для заповнення
              </p>   
              <div v-for="(author, index) in reqBody.authors" :key="author">
                  <h3 class="mt-6" v-if="index === 0">Автор 1</h3>
                  <h3 class="mt-6" v-else>
                    Автор {{index + 1}}
                    <button class="text-red-500 bg-red-200 px-3 py-2 rounded-full font-bold cursor-pointer ml-6"
                            @click="removeAuthor(index)">
                      Видалити автора
                      <font-awesome-icon icon="times" class="ml-2.5"/>
                    </button>
                  </h3>
                  <div class="grid gap-x-5 gap-y-6 mt-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                      <BaseInput  name="name"
                                  placeholder="Ім’я"
                                  v-model="author.name"
                                  required="required"/>
                      <BaseInput  name="surname"
                                  placeholder="Прізвище"
                                  v-model="author.surname"
                                  required="required"/>  
                      <BaseInput  name="patronymic"
                                  placeholder="По батькові"
                                  v-model="author.patronymic"
                                  required="required"/>
                      <BaseInput  name="nameEng"
                                  placeholder="Ім’я англ."
                                  v-model="author.nameEng"
                                  required="required"/>  
                      <BaseInput  name="surnameEng"
                                  placeholder="Прізвище англ."
                                  v-model="author.surnameEng"
                                  required="required"/>
                  </div>
                  <div class="grid gap-6 mt-6 md:grid-cols-2 grid-cols-1">
                      <BaseSelectInput  name="scientificDegree"
                                      placeholder="Наукова ступінь"
                                      :options="['Кандидат наук', 'Доктор наук']"
                                      v-model="author.scientificDegree"/>      
                      <BaseSelectInput  name="academicStatus"
                                      placeholder="Вчене звання"
                                      :options="['Асистент', 'Доцент', 'Старший дослідник', 'Професор']"
                                      v-model="author.academicStatus"/>      
                      <BaseInput  name="position-placeOfWork-Training"
                                  placeholder="Місце роботи/навчання"
                                  v-model="author.position"
                                  required="required"/>
                      <BaseSelectInput  name="educationalQualificationLevel"
                                      placeholder="Освітньо-кваліфікаційний рівень"
                                      :options="['Бакалавр', 'Магістр']"
                                      v-model="author.educationalQualificationLevel"/>      
                      <BaseInput  name="department-faculty"
                                  placeholder="Факультет"
                                  v-model="author.faculty"/>
                      <BaseInput  name="speciality"
                                  placeholder="Спеціальність"
                                  v-model="author.speciality"/>
                  </div>
                  <div class="grid mt-6 gap-6 grid-cols-1 md:grid-cols-3">
                      <BaseSelectInput  name="formOfParticipation"
                                      placeholder="Форма участі"
                                      :options="['Очна', 'Заочна']"
                                      v-model="author.formOfParticipation"
                                      required="required"/>       
                      <BaseInput  name="arrivalDate"
                                  type="date"
                                  labelPlaceHolder="Дата приїзду"
                                  v-model="author.arrivalDate"
                                  required="required"
                                  v-if="author.formOfParticipation === 'Очна'"/>          
                      <BaseInput  name="departureDate"
                                  type="date"
                                  labelPlaceHolder="Дата від’їзду"
                                  v-model="author.departureDate"
                                  required="required"
                                  v-if="author.formOfParticipation === 'Очна'"/>                 
                  </div>
                  <div class="grid gap-6 mt-6 grid-cols-1 md:grid-cols-2">
                      <BaseInput  name="phone"
                                  placeholder="Телефон"
                                  v-model="author.phone"
                                  required="required"/>
                      <BaseInput  name="email"
                                  type="email"
                                  placeholder="Email"
                                  v-model="author.email"
                                  required="required"/>      
                  </div>      
              </div>
              <div class="mt-8 sm:text-left text-center">
                  <BaseButton title="Додати автора" 
                              icon="user-plus"
                              styled="secondary"
                              v-if="reqBody.authors.length < maxAuthors"
                              @click="addAuthor"/>
                  <p v-else>Максимальна кількість авторів {{maxAuthors}}.</p>
              </div>
            </div>
            <h2 class="paragraph-title mt-8" data-paragraph-index="3">Прикрепіть файл</h2>
              <p class="mt-6">Прикладіть файл з тезами, оформлений згідно з <a href="/">шаблоном</a></p>
              <p class="mt-2">Формати: doc, docx.</p>
              <div class="percent-wrap mt-6 grid gap-6 place-items-center justify-items-center sm:justify-items-start grid-cols-1 sm:grid-cols-2" data-pervent-val="100%">
                <BaseInputFile  name="uploadFile" v-model="reqBody.uploadFile"
                      accept="application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"/>
                <p v-if="reqBody.uploadFile" class="font-semibold">
                  <font-awesome-icon icon="check-circle" class="mr-2"/>
                  {{reqBody.uploadFile.name}}
                </p>
                <p v-else-if="uploadFileErr" class="text-red-500 font-bold">
                  <font-awesome-icon icon="exclamation-triangle" class="mr-2.5"/>
                  {{uploadFileErr}}
                </p>
              </div>
              <div class="grid gap-6 place-items-center justify-items-center sm:justify-items-start sm:place-items-start mt-8 grid-cols-1 sm:grid-cols-2">
                <BaseButton title="Відправити"
                    type="submit"
                    ref="submitBtn"
                    :loader="reqStatus"/>
                <p v-if="reqStatus === 'pending'">
                  Надсилання запиту в середньому займає 10 - 20 секунд
                </p>
                <p v-else-if="reqStatus === 'resolve'">
                  Запит відправлений незабаром з вами зв'яжуться
                </p>   
                <p v-else-if="reqStatus === 'reject'" class="text-red-500 font-bold">
                  {{reqError}}
                </p>          
              </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'

import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseResizeTextArea from '@/components/BaseResizeTextArea.vue'
import BaseSelectInput from '@/components/BaseSelectInput.vue'
import BaseInputFile from '@/components/BaseInputFile.vue'

import ModalWindow from '@/components/ModalWindow.vue'

import useMergeDoc from '../modules/mergeDoc'
import getStatus from '../modules/getStatus'
export default defineComponent({
  name: 'Home',
  components: {
    BaseInput,
    BaseResizeTextArea,
    BaseInputFile,
    BaseButton,
    BaseSelectInput,

    ModalWindow
  },
  setup() {
    const { error: ServerError, check } = getStatus()
    check()

    const { reqStatus, reqError, send } = useMergeDoc()

    const reqBody = reactive({
      authors: [{}]
    })
    const uploadFileErr = ref(null)

    const sendForm = async () => {
      if (!reqBody.uploadFile) 
        return uploadFileErr.value = 'Прикрепіть файл'

      if (reqStatus.value !== 'pending' && reqStatus.value !== 'resolve') {
        for (let author of reqBody.authors) {
          author.theseName = reqBody.theseName
        }
        await send(reqBody)
      }
    }

    const maxAuthors = 3
    const addAuthor = () => {
      reqBody.authors.push({})
    }
    const removeAuthor = (index) => {
     reqBody.authors.splice(index, 1)
    }

    return {
      ServerError,

      sendForm,
      reqBody,
      uploadFileErr,

      maxAuthors,
      addAuthor,
      removeAuthor,

      reqError,
      reqStatus
    }
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
  text-5xl bg-white md:block hidden;
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
  @apply absolute top-[50%] left-[-10%] translate-x-[-50%] translate-y-[-50%] bg-white text-gray-500 md:block hidden;
}
</style>