<template>
    <div v-for="(author, index) in authors" :key="author">
        <h3 class="mt-6">Автор {{index + 1}}</h3>
        <div class="grid grid-cols-3 gap-x-5 gap-y-6 mt-6">
            <BaseInput  name="name"
                        placeholder="Ім’я"/>
            <BaseInput  name="surname"
                        placeholder="Прізвище"/>  
            <BaseInput  name="patronymic"
                        placeholder="По батькові"/>
            <BaseInput  name="nameEng"
                        placeholder="Ім’я англ."/>  
            <BaseInput  name="surnameEng"
                        placeholder="Прізвище англ."/>
        </div>
        <div class="grid grid-cols-2 gap-6 mt-6">
            <BaseInput  name="scientificDegree"
                        placeholder="Наукова ступінь"/>
            <BaseInput  name="academicStatus"
                        placeholder="Вчене звання"/>  
            <BaseInput  name="position-placeOfWork-Training"
                        placeholder="Посада, місце роботи, навчання"/>
            <BaseInput  name="educationalQualificationLevel"
                        placeholder="Освітньо-кваліфікаційний рівень"/>  
            <BaseInput  name="department-faculty"
                        placeholder="Кафедра, факультет, ВНЗ"/>
            <BaseInput  name="speciality"
                        placeholder="Спеціальність"/>
        </div>
        <BaseInput  class="mt-6"
                    name="titleOfTheReport"
                    placeholder="Назва доповіді"/>
        <div class="flex mt-6 gap-6">
            <BaseSelectInput  name="formOfParticipation"
                            placeholder="Форма участі"
                            :options="['Очна', 'Заочна']"/>          
            <BaseInput  name="arrivalDate"
                        type="date"
                        data-input-top-placeholder="Дата приїзду"/>          
            <BaseInput  name="departureDate"
                        type="date"
                        data-input-top-placeholder="Дата від’їзду"/>                      
        </div>
        <div class="flex gap-6 mt-6">
            <BaseInput  name="phone"
                        placeholder="Телефон"/>
            <BaseInput  name="email"
                        placeholder="Email"/>      
        </div>      
    </div>
    <div class="mt-8">
        <BaseButton title="Додати автора" 
                    icon="user-plus"
                    styled="secondary"
                    v-if="authors.length < maxAuthors"
                    @click="addAuthor"/>
        <p v-else>Максимальна кількість авторів {{maxAuthors}}.</p>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue'
import BaseSelectInput from './BaseSelectInput.vue'

export default defineComponent({
    name: 'AddAuthor',
    components: {
        BaseButton,
        BaseInput,
        BaseSelectInput
    },
    props: {
        maxAuthors: {
            type: Number,
            default: 1
        }
    },
    setup() {
        const authors = ref([{}])

        const addAuthor = () => {
            authors.value.push({})
        }

        return {
            authors,
            addAuthor
        }
    }
})
</script>