<template>
  <div class="min-h-screen bg-white py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-8">서비스 이용약관</h1>
      
      <div class="prose prose-lg max-w-none">
        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">제1조 (목적)</h2>
          <p class="text-gray-600">
            본 약관은 sou.zip(이하 "회사")이 제공하는 여행 기념품 추천 서비스(이하 "서비스")의 
            이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">제2조 (정의)</h2>
          <p class="text-gray-600 mb-4">본 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
          <ul class="list-disc pl-6 text-gray-600 space-y-2">
            <li>"서비스"란 회사가 제공하는 여행 기념품 추천 플랫폼을 의미합니다.</li>
            <li>"이용자"란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 의미합니다.</li>
            <li>"회원"이란 서비스에 가입하여 이용하는 자를 의미합니다.</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">제3조 (약관의 효력 및 변경)</h2>
          <p class="text-gray-600 mb-4">
            1. 본 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.
          </p>
          <p class="text-gray-600 mb-4">
            2. 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있습니다.
          </p>
          <p class="text-gray-600">
            3. 약관이 변경되는 경우, 회사는 변경사항을 서비스 내 공지사항을 통해 공지합니다.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">제4조 (서비스의 제공)</h2>
          <p class="text-gray-600 mb-4">
            회사는 다음과 같은 서비스를 제공합니다:
          </p>
          <ul class="list-disc pl-6 text-gray-600 space-y-2">
            <li>AI 기반 여행 기념품 추천</li>
            <li>현지 기념품 정보 제공</li>
            <li>선물 가이드 서비스</li>
            <li>기타 회사가 정하는 서비스</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">제5조 (서비스 이용)</h2>
          <p class="text-gray-600 mb-4">
            1. 서비스는 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간 제공함을 원칙으로 합니다.
          </p>
          <p class="text-gray-600">
            2. 회사는 시스템 정기점검, 증설 및 교체를 위해 서비스를 일시 중단할 수 있으며, 
            이 경우 사전에 공지합니다.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">제6조 (이용자의 의무)</h2>
          <p class="text-gray-600 mb-4">
            이용자는 다음 행위를 하여서는 안 됩니다:
          </p>
          <ul class="list-disc pl-6 text-gray-600 space-y-2">
            <li>타인의 정보 도용</li>
            <li>회사의 서비스 운영 방해</li>
            <li>허위 정보 등록</li>
            <li>타인의 명예를 훼손하거나 불이익을 주는 행위</li>
            <li>저작권 등 지적재산권 침해</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">제7조 (면책조항)</h2>
          <p class="text-gray-600 mb-4">
            1. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우 
            서비스 제공에 관한 책임이 면제됩니다.
          </p>
          <p class="text-gray-600">
            2. 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">제8조 (분쟁 해결)</h2>
          <p class="text-gray-600">
            본 약관에 명시되지 않은 사항은 관련 법령 및 상관례에 따릅니다.
          </p>
        </section>

        <section class="mb-8">
          <p class="text-sm text-gray-500">
            본 약관은 2025년 11월 28일부터 적용됩니다.
          </p>
        </section>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-200">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          홈으로 돌아가기
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: '서비스 이용약관 - sou.zip',
  meta: [
    { name: 'description', content: 'sou.zip 서비스 이용약관' }
  ]
})
</script>