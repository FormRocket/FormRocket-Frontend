<script setup>
import { reloadAuth } from './auth.js'
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
console.log(route)
if (route.query.token && (!window.localStorage.getItem("token"))) {
    window.localStorage.setItem("token", route.query.token);
    reloadAuth();
}
router.push("/")
</script>