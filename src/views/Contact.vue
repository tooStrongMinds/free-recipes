<template>
  <div class="header">
    <Banner />
  </div>

  <div class="contact head">
    <h1>Contact Us</h1>
    
    <hr />

    <div class="social">
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <hr>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <hr>
        <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
    </div>

  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'

export default {
    name: 'Contact',
    components: {Banner}
}
</script>

<style>
.contact {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contact h1 {
    margin-bottom: 15px;
}
.social {
    display: flex;
    justify-content: center;
    gap: 45px;
    margin-block: 20px;
}
.social a i {
    font-size: 2rem;
    color: #000;
    cursor: pointer;
    transition: color .3s ease;
}
.social a i:hover {
    color: #858585;
}
hr {
    width: 100%;
    background: #545454;
}

</style>