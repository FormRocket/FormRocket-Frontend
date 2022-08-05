import { ref } from "vue"
import { request } from "@/services/request.js"
import { reloadAuth } from '@/services/auth.js'
import Navbar from '@/components/Navbar.vue';
import { useRouter, useRoute } from 'vue-router';

export default {
  components: {
    Navbar
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const resetToken = ref(route.params.token);

    /*if (session?.value?.user) {
        router.push('/');
        return;
    }*/

    const username = ref("LOADING...");
    const password = ref("");
    const isLoading = ref(true);

    request({
        method: "POST",
        url: "/api/auth/reset/getToken",
        body: {
            token: resetToken.value
        }
    }).then((response) => {
        if (response.status == 200) {
            username.value = response.data.username
            isLoading.value = false;
        } else {
            swal("Error", response.data.error.data, "error");
            router.push('/');
        }
    })

    function validate() {
    if (password.value.length < 8 || password.value.length > 30) {
        swal("Error", "Password must be between 8 and 30 characters.", "error");
        return false;
    }
      return true;
  }
  
  async function submit() {
      var valid = validate();
      if (!valid) {
          return;
      }
      if (isLoading.value) return;
      isLoading.value = true;
      const response = await request({
          url: "/api/auth/reset/submit",
          method: "POST",
          body: {
              token: resetToken.value,
              password: password.value
          }
      })
  
      if (response.status != 200) {
            swal("Error", response.data.error.data, "error");
      } else {
            swal("Success", "You have succesfully reset your password!", "success");
            window.localStorage.setItem("token", response.data.token);
            reloadAuth();
            router.push("/")
      }
      isLoading.value = false;
  }

    function handleKeyDown(e) {
      if (e.keyCode == 13) {
        submit();
        e.preventDefault();
      }
    }

    return {
        username,
      password,
      isLoading,
      handleKeyDown,
      submit
    }
  },
  render(vals) {
    return <>
    <Navbar session={null} showBack={true} showDashboard={true}></Navbar>
    <div class="appContent">
    <div class="mx-auto max-w-7xl">
            <div class="flex flex-col lg:flex-row">
                <div class="relative w-full bg-cover lg:w-6/12 xl:w-7/12">
                    <div class="relative flex flex-col pt-[10%] w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                        <div class="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                            <div class="relative">
                                <h4
                                    class="w-full text-2xl text-transparent bg-clip-text bg-gradient-to-r font-bold text-lg-gradient uppercase">
                                    FORMROCKET</h4>
                                <h1 class="text-5xl font-bold text-gray-300 xl:text-6xl">Welcome back to <span
                                        style="display:initial!important;"
                                        class="text-lg-gradient">FormRocket.</span></h1>
                                <p class="text-2xl text-gray-400 mt-4">Let's get you logged back onto the most powerful
                                    HTML form backend!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-6/12 xl:w-5/12">
                    <div class="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                        <h4 class="w-full text-3xl font-bold">Reset Password</h4>
                        <div class="relative w-full mt-10 space-y-8">
                            <div class="relative">
                                <label class="font-medium text-gray-400">Username</label>
                                <div style="background-color: #222222; color: rgba(255,255,255,0.5)" class="block w-full px-4 py-4 mt-2 text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-white">
                                    {vals.username}
                                </div>
                            </div>
                            <div class="relative">
                                <label class="font-medium text-gray-400">New Password</label>
                                <input v-model={vals.password} type="text"
                                    class="block w-full px-4 py-4 mt-2 text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                                    placeholder="Password" onKeydown={vals.handleKeyDown} />
                            </div>
                            <div class="relative">
                                <button
                                    onClick={vals.submit}
                                    class="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-pink-600 rounded-lg hover:bg-pink-700 ease">{!vals.isLoading ? "RESET" : "LOADING..."}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  }
}