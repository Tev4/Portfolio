<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import { useRoute } from "vue-router";
import { projects } from "../projects";
import { ref, onMounted } from "vue";
import { BCarousel, BCarouselSlide } from "bootstrap-vue-next";

const route = useRoute();
const project = projects.find((p) => p.id === route.params.id);

const imageModules = import.meta.glob("/src/assets/project_images/*/*.png", {
  eager: false, // Lazy load
  import: "default",
});

const images = ref<string[]>([]);

const loadProjectImages = async (project: string) => {
  const prefix = `/src/assets/project_images/${project}/`;

  // Filter image paths matching the current project
  const filteredEntries = Object.entries(imageModules).filter(([path]) =>
    path.startsWith(prefix)
  );

  // Sort by filename number (assumes filename ends with something like '1.png')
  filteredEntries.sort(([pathA], [pathB]) => {
    const getNumber = (path: string) => {
      // Extract the number from the filename, e.g. '.../3.png' -> 3
      const match = path.match(/(\d+)\.png$/);
      return match ? parseInt(match[1], 10) : 0;
    };
    return getNumber(pathA) - getNumber(pathB);
  });

  // Dynamically import each filtered image and collect their URLs
  const loadedImages = await Promise.all(
    filteredEntries.map(async ([, importer]) => {
      const module = await importer();
      return module as string;
    })
  );

  images.value = loadedImages;
};

onMounted(() => {
  if (project) {
    loadProjectImages(project.id);
  }
});
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>

  <main>
    <BContainer v-if="project">
      <div class="d-flex flex-column align-items-center text-center">
        <BRow class="text-center mb-0">
          <BCol md="auto">
            <h1 class="mb-0">{{ project.title }}:</h1>
          </BCol>
          <BCol md="auto">
            <h3 class="mb-0 project_subtitle" v-if="project.subtitle">
              {{ project.subtitle }}
            </h3>
          </BCol>
        </BRow>
        <div class="d-flex align-items-center mb-2"></div>
        <div class="d-flex gap-1 mb-3">
          <BBadge v-for="tech in project.techStack" :key="tech" pill>
            {{ tech }}
          </BBadge>
        </div>
      </div>

      <BCarousel
        ref="project_carousel"
        class="detail_carousel"
        indicators
        controls
        background="--bs-dark"
      >
        <BCarouselSlide
          v-for="(image, index) in images"
          :key="index"
          :img-src="image"
          :img-alt="`Image ${index + 1} for ${project.title}`"
        />
      </BCarousel>
      <p class="project_description">{{ project.description }}</p>
    </BContainer>

    <div v-else>
      <p>Project not found.</p>
    </div>
    <!-- PROJECT NAME -->
    <!-- Project Header -->
    <!-- manual carousel, each image has a short description -->
    <!-- Overall description of project -->
    <!-- Tech stack -->
    <!-- Links? -->
  </main>
</template>

<style scoped>
.project_title_col {
  padding: 0;
}

.project_subtitle {
  margin-top: 0.8rem;
}

.project_description {
  text-align: center;
  max-width: 50rem;
  margin: 2rem auto 0 auto;
}

.carousel {
  max-height: 35rem;
  max-width: 80rem;
}
</style>
