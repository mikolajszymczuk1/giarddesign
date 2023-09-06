<template>
  <NavigationBar />

  <!-- ====== HEADER ====== -->
  <header class="md:flex">
    <!-- Heading part -->
    <div class="pt-[55px] pb-[72px] px-[21px] bg-mediumCream lg:pl-[89px] lg:pr-[64px] xlg:py-[144px] ulg:pl-[10%]">
      <h1
        class="mb-[22px] font-montserrat text-[1.875rem] text-black leading-[45px] xlg:mb-[44px] xlg:text-[3.75rem] xlg:leading-[70px]"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Nowoczesna<br>
        aranżacja<br>
        Twojego ogrodu
      </h1>

      <h2
        class="mb-[36px] font-inter text-[0.75rem] text-black font-normal xlg:mb-[72px] xlg:text-[1rem] xlg:pr-[20%]"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji.
        Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.
      </h2>

      <div
        class="flex flex-col gap-y-[16px] items-start xlg:flex-row xlg:gap-x-[30px]"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <RoundedButton btn-color="light">
          Skontaktuj się z nami
        </RoundedButton>

        <RoundedButton
          with-icon
          transparent
          btn-color="green"
          bordered
        >
          Zobacz nasze realizacje
        </RoundedButton>
      </div>
    </div>

    <!-- Slider part -->
    <div class="md:w-[50%] xlg:w-[47.5%]">
      <HeroSlider />
    </div>
  </header>

  <!-- ====== MAIN ====== -->
  <main>
    <section class="pt-[60px] pb-[156px] xlg:pt-[120px] xlg:pb-[160px]">
      <div
        class="px-[21px] mb-[49px] md:pl-[20%] md:pr-[35%] xlg:pl-[14%] xlg:pr-[37%] xlg:mb-[96px] ulg:pl-[22%] ulg:pr-[]"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <HeadingTextBlock>
          <template #section-name>
            Oferta
          </template>
          <template #section-title-first-part>
            Działamy
          </template>
          <template #section-title-second-part>
            kompleksowo
          </template>
          <template #section-content>
            Oferujemy kompletną obsługę inwestycji terenów zielonych.
            Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne.
            Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie,
            a na każdym etapie posłużymy radą i wieloletnim doświadczeniem.
          </template>
        </HeadingTextBlock>
      </div>

      <!-- Cards -->
      <div class="flex justify-center flex-wrap gap-y-[32px] gap-x-[64px] px-[27px]">
        <OfferCard
          icon="pencil"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          <template #card-title>
            Projekty
          </template>
          <template #card-content>
            Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.
          </template>
        </OfferCard>

        <OfferCard
          icon="eye"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="600"
        >
          <template #card-title>
            Wizualizacje
          </template>
          <template #card-content>
            Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.
          </template>
        </OfferCard>

        <OfferCard
          icon="stars"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="900"
        >
          <template #card-title>
            Realizacje
          </template>
          <template #card-content>
            Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.
          </template>
        </OfferCard>
      </div>
    </section>

    <section class="md:flex md:flex-row-reverse">
      <div
        class="flex flex-col items-start gap-y-[36px] px-[21px] py-[70px] bg-green md:w-[54.5%] lg:pl-[160px]
          lg:pr-[92px] lg:py-[135px] xlg:gap-y-[72px] ulg:pr-[10%] ulg:pl-[10%]"
      >
        <HeadingTextBlock light>
          <template #section-name>
            O firmie
          </template>
          <template #section-title-first-part>
            Tworzymy<br> z
          </template>
          <template #section-title-second-part>
            pasją
          </template>
          <template #section-content>
            Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą wykwalifikowani projektanci oraz architekci,
            których zadaniem jest rozpoznanie i realizacja potrzeb każdego Klienta.
            Nasza specjalizacja to przestrzenie nowoczesne, które charakteryzuje minimalizm, geometria i elegancka prostota.
            Tworzymy ogrody małoobsługowe, dostosowane do współczesnego trybu życia.
          </template>
        </HeadingTextBlock>

        <RoundedButton
          with-icon
          transparent
          btn-color="light"
          bordered
          arrow-right
        >
          Poznaj nas bliżej
        </RoundedButton>
      </div>

      <div
        class="h-[375px] bg-aboutImageMobile bg-no-repeat bg-center bg-cover lg:bg-aboutImageDesktop md:w-[47.5%] md:h-auto"
        data-aos="fade-right"
        data-aos-duration="800"
      >
      </div>
    </section>

    <section class="pt-[60px] pb-[14px] bg-mediumCream xlg:pt-[120px]">
      <div class="mb-[47px] px-[27px] md:pl-[20%] xlg:pl-[160px] xlg:mb-[96px] ulg:pl-[20%]">
        <HeadingTextBlock no-content>
          <template #section-name>
            Realizacje
          </template>
          <template #section-title-first-part>
            Nasze
          </template>
          <template #section-title-second-part>
            projekty
          </template>
        </HeadingTextBlock>
      </div>

      <div
        class="relative px-[27px] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%] before:bg-gradient-to-t
        before:from-mediumCream before:z-[1] xlg:px-0"
      >
        <MansoryGallery />

        <div class="absolute bottom-[70px] left-[50%] translate-x-[-50%] z-[1]">
          <RoundedButton
            transparent
            with-icon
            btn-color="black"
            bordered
          >
            Rozwiń
          </RoundedButton>
        </div>
      </div>
    </section>

    <section class="px-[26px] py-[30px] xlg:px-[200px] xlg:py-[60px]">
      <div class="px-[25px] py-[60px] bg-green md:flex items-center justify-center gap-x-[64px] xlg:py-[120px] xlg:px-[110px]">
        <h3
          class="mb-[30px] font-montserrat text-[1.25rem] leading-[120%] tracking-[-2px] text-lightCream md:mb-0 xlg:text-[2.5rem]"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Zostańmy w kontakcie!<br>
          Znajdziesz nas na <span class="font-inter font-medium italic">Instagramie.</span>
        </h3>

        <div>
          <p class="mb-[24px] font-inter text-[0.75rem] text-lightCream xlg:text-[1rem]">
            Śledź nasze najnowsze<br>
            realizacje!
          </p>

          <RoundedButton bg-light>
            Instagram
          </RoundedButton>
        </div>
      </div>
    </section>
  </main>

  <ContactFooter />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Aos from 'aos';

import NavigationBar from '@/components/navigation/NavigationBar.vue';
import RoundedButton from '@/components/buttons/RoundedButton.vue';
import HeroSlider from '@/widgets/HeroSlider.vue';
import HeadingTextBlock from '@/components/HeadingTextBlock.vue';
import OfferCard from '@/components/cards/OfferCard.vue';
import MansoryGallery from '@/widgets/MansoryGallery.vue';
import ContactFooter from '@/components/ContactFooter.vue';

onMounted(() => {
  /** === Setup AOS lib === */
  Aos.init();
  /** ===================== */
});
</script>
