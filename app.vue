<script lang="ts" setup>
const AIR_KEY = 'patLzYGhyd5rcc70K.1a7f1944212e6098ea80982d15d955af4a1c74161e0b760991ee6387b5fe6b07'
import Airtable from "airtable";

const base = new Airtable({apiKey: AIR_KEY}).base('app5Pi0BXnTHpo8V7');


useHead({
  title: "Nghĩa Hương weding",
  link: [
    {
      href: "https://fonts.googleapis.com/css2?family=Cinzel&family=Cormorant+Garamond:wght@700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap",
      rel: "stylesheet"
    }
  ]
})

const completed = ref(false)

const form = ref({
  name: "",
  amount: 1,
  note: ""
})

onMounted(() => {
  const elms = document.querySelectorAll(".animate-wiggle")
  let timeout = 0
  elms.forEach(elm => {
    setTimeout(() => {
      elm.classList.add('force')
    }, timeout)
    timeout = timeout + 1000
  })

  const the_animation = document.querySelectorAll('.animation')
  const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
          } else {
            entry.target.classList.remove('scroll-animation')
          }

        })
      },
      {
        threshold: 0.5
      });
  for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];
    observer.observe(elements);
  }
})

const submit = () => {
  completed.value = false
  base('Table 1').create([
    {
      "fields": {
        name: form.value.name,
        people: form.value.amount.toString(),
        note: form.value.note
      }
    }
  ], function (err: string) {
    if (err) {
      console.error(err);
      return;
    }
    form.value.note = ''
    form.value.amount = 1
    form.value.name = ''
    completed.value = true
  });
}
</script>
<template>
  <div v-if="false" id="s5" class="h-screen flex">
    <div class="w-1/2 flex items-start justify-end p-8 py-16 text-center">
      <div>
        <div class="font-valky uppercase text-8xl">
          <div>Save</div>
          <div class="text-2xl font-dfvn">the</div>
          <div>Date</div>
        </div>
        <div class="text-xl text-gray-600 font-valky">16.12.2023</div>
      </div>
    </div>
    <div class="flex justify-end items-end w-1/2">
      <img class="w-3/4" src="/img/bg5.png" alt="">
    </div>
  </div>
  <div id="s1" class="h-screen flex md:items-center py-24 md:py-16 relative">
    <div class="absolute bottom-0 right-0 flex justify-end items-end w-full md:w-1/2">
      <img class="w-full" src="/img/bg5.png" alt="">
    </div>
    <div class="relative z-10 max-w-2xl mx-auto text-center space-y-4 md:space-y-8">
      <div class="text-xl font-lora text-gray-500 animate-wiggle">Welcome to our wedding</div>
      <div class="font-valky uppercase text-5xl md:text-7xl">
        <div class="animate-wiggle">Trọng Nghĩa</div>
        <div class="animate-wiggle text-2xl">&</div>
        <div class="animate-wiggle">Lan Hương</div>
      </div>
      <div class="animate-wiggle text-xl text-gray-600 font-valky">16.12.2023</div>
    </div>
  </div>
  <div id="s2" class="md:h-screen bg-white text-center leading-6">
    <div class="max-w-2xl mx-auto space-y-6 py-8 font-lora p-4 animation">
      <div>
        <img class="w-32 md:w-52 mx-auto" src="/logo.png" alt="logo"/>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div>Nhà Trai</div>
          <div>Ông <span class="uppercase font-semibold">Đinh Văn Thịnh</span></div>
          <div>Bà <span class="uppercase font-semibold">Quản Thị Kim Oanh</span></div>
        </div>
        <div>
          <div>Nhà gái</div>
          <div>Ông <span class="uppercase font-semibold">Nguyễn Quốc Hoàn</span></div>
          <div>Bà <span class="uppercase font-semibold">Nguyễn thị hồng hạnh</span></div>
        </div>
      </div>
      <p class="">Trân trọng kính mời bạn đến dự Lễ Thành Hôn của</p>
      <div class=" font-valky uppercase text-3xl md:text-5xl">
        <div>Trọng Nghĩa</div>
        <div class="text-2xl">&</div>
        <div>Lan Hương</div>
      </div>
      <div>
        <img class="w-1/2 mx-auto" src="/hr.png" alt="">
      </div>
      <div class="space-y-4">
        <div class="">
          <div class="uppercase font-semibold font-cormorant text-xl md:text-3xl">Sen Start Palace</div>
          <div>127 Nhật Chiêu, Tây Hồ, Hà Nội</div>
        </div>
        <div class="flex justify-center gap-6 uppercase font-semibold font-valky text-xl md:text-2xl">
          <div>17:00</div>
          <div>|</div>
          <div>Thứ 7</div>
          <div>|</div>
          <div>16.12.23</div>
        </div>
        <div class="">
          <div>Sự hiện diện của bạn</div>
          <div>là niềm vinh hạnh cho gia đình chúng tôi!</div>
        </div>
      </div>
    </div>
  </div>
  <div id="s3" class="p-4 space-y-4 text-center">
    <div class="text-center font-cormorant uppercase text-3xl">Timeline</div>
    <div class="">
      <img class="md:w-1/3 mx-auto" src="/img/bg3.jpg" alt="">
    </div>
  </div>
  <div id="s4" class="w-full p-4 space-y-4">
    <div class="text-center font-cormorant uppercase text-2xl md:text-3xl">khoảng khắc ngọt ngào</div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <div class="h-full flex items-center" v-for="i in 15">
        <img :src="`/img/slider/${i}.jpg`" class="w-full my-auto" alt="">
      </div>
    </div>
  </div>
  <div id="s6" class="md:h-screen relative overflow-hidden flex items-center py-6">
    <div class="wrap absolute inset-0 blur-sm"></div>
    <div class="relative z-10 max-w-3xl mx-auto font-myriad-pro p-4 space-y-6">
      <div>
        <div class="font-valky text-3xl">Bạn sẽ đến chứ?</div>
        <p>Đám cưới của chúng tôi sẽ trọn vẹn hơn khi có thêm lời chúc phúc và sự hiện diện của các bạn. Xin hãy xác
          nhận sự có mặt của mình để chúng tôi chuẩn bị đón tiếp một cách chu đáo nhất nhé! Trân trọng!</p>
      </div>
      <div>
        <div class="mt-6 space-y-6">
          <div class="sm:col-span-6">
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Tên của bạn</label>
            <div class="mt-2">
              <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 outline-none focus:outline-none sm:max-w-md">
                <input v-model="form.name" type="text" name="username" id="username" autocomplete="username"
                       class="bg-white block flex-1 border-0 py-1.5 px-3 text-gray-900 placeholder:text-gray-400 outline-none"
                       placeholder="Chenny"/>
              </div>
            </div>
          </div>
          <div class="sm:col-span-6">
            <label for="member" class="block text-sm font-medium leading-6 text-gray-900">Số lượng người tham dự</label>
            <div class="mt-2">
              <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 outline-none focus:outline-none sm:max-w-md">
                <input v-model="form.amount" type="number" name="member" id="member" autocomplete="username"
                       class="bg-white block flex-1 border-0 py-1.5 px-3 text-gray-900 placeholder:text-gray-400 outline-none"
                       placeholder="Chenny"/>
              </div>
            </div>
          </div>
          <div class="col-span-full">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Lời nhắn gửi của bạn cho cô dâu
              chú rể (nếu có)</label>
            <div class="mt-2">
              <textarea v-model="form.note" id="about" name="about" rows="3"
                        class="bg-white outline-none hover:outline-none block w-full border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 p-3"/>
            </div>
          </div>
          <div class="flex gap-4 items-center">
            <div
                class="inline-flex p-12 py-3 cursor-pointer bg-[#58585a] text-white leading-none"
                @click="submit"
            >Gửi
            </div>
            <p v-if="completed" class="italic font-myriad-pro">Gửi thành công</p>
          </div>
        </div>
      </div>
      <div>
        <div class="font-valky text-3xl">Mừng cưới</div>
        <div class="md:w-1/2 grid grid-cols-2 gap-4">
          <img src="/huong.jpg" alt="">
          <img src="/nghia.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#s1 {
  background: #fcf6ef;
}

#s6 .wrap {
  background-image: url("/img/bg6.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#s6 .wrap:after {
  @apply absolute inset-0;
  background: #fcf6ef90;
  content: "";
}

#s5 {
  background: #fcf6ef;
}

.animate-wiggle {
  opacity: 0;
  transition: 1s;
  transform: translateY(300px);
}

.animate-wiggle.force {
  opacity: 1;
  transform: translateY(0);
}

.animation {
  opacity: 0;
  transform: translateY(300px);
  transition: all 0.7s ease-out;
  transition-delay: 0.4s;

}

.scroll-animation {
  opacity: 1;
  transform: translateX(0);
}
</style>
