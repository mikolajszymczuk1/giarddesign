<template>
  <NavigationBar />

  <!-- ====== HEADER ====== -->
  <header class="md:flex">
    <!-- Heading part -->
    <div class="pt-[55px] pb-[72px] px-[21px] bg-mediumCream lg:pl-[89px] lg:pr-[64px] xlg:py-[144px] ulg:pl-[10%]">
      <h1 class="mb-[22px] font-montserrat text-[1.875rem] text-black leading-[45px] xlg:mb-[44px] xlg:text-[3.75rem] xlg:leading-[70px]">
        Nowoczesna<br>
        aranżacja<br>
        Twojego ogrodu
      </h1>

      <h2 class="mb-[36px] font-inter text-[0.75rem] text-black font-normal xlg:mb-[72px] xlg:text-[1rem] xlg:pr-[20%]">
        Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji.
        Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.
      </h2>

      <div class="flex flex-col gap-y-[16px] items-start xlg:flex-row xlg:gap-x-[30px]">
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
      <div class="px-[21px] mb-[49px] md:pl-[20%] md:pr-[35%] xlg:pl-[14%] xlg:pr-[37%] xlg:mb-[96px] ulg:pl-[22%] ulg:pr-[]">
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
        <OfferCard icon="pencil">
          <template #card-title>
            Projekty
          </template>
          <template #card-content>
            Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.
          </template>
        </OfferCard>

        <OfferCard icon="eye">
          <template #card-title>
            Wizualizacje
          </template>
          <template #card-content>
            Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.
          </template>
        </OfferCard>

        <OfferCard icon="stars">
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

      <div class="h-[375px] bg-aboutImageMobile bg-no-repeat bg-center bg-cover lg:bg-aboutImageDesktop md:w-[47.5%] md:h-auto">
      </div>
    </section>
  </main>

  <ContactFooter />
</template>

<script setup lang="ts">
import NavigationBar from '@/components/navigation/NavigationBar.vue';
import RoundedButton from '@/components/buttons/RoundedButton.vue';
import HeroSlider from '@/widgets/HeroSlider.vue';
import HeadingTextBlock from '@/components/HeadingTextBlock.vue';
import OfferCard from '@/components/cards/OfferCard.vue';
import ContactFooter from '@/components/ContactFooter.vue';
</script>
