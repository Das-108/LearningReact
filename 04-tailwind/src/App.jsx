import React from 'react'

const App = () => {
  return (
    <div class="max-w-md mx-auto p-6 rounded-2xl bg-[#FBE8D2] shadow-lg">
  <div class="flex items-center gap-3 mb-4">
    <div class="p-3 rounded-xl bg-[#F9D2C0]">
      <svg xmlns="http://www.w3.org/2000/svg" 
           class="h-6 w-6 text-[#B2402A]" 
           fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21c-4.97 0-9-4.03-9-9 0-4.09 2.73-7.57 6.52-8.65a1 1 0 0 1 .96.25l.92.92a1 1 0 0 1-1.09 1.64A7 7 0 1 0 12 19a1 1 0 0 1 2 0c0 1.1-.9 2-2 2z"/>
      </svg>
    </div>
    <div>
      <h2 class="text-xl font-semibold text-[#B2402A]">Support the Temple</h2>
      <p class="text-sm text-[#8C4F44] -mt-1">Contribute to the Bhakti Fund</p>
    </div>
  </div>

  <div class="flex gap-3 mb-5 flex-wrap">
    <button class="px-4 py-2 bg-white rounded-xl border text-[#5A4640] hover:bg-[#FFF4EE] transition">
      $11
    </button>

    <button class="px-4 py-2 bg-white rounded-xl border text-[#5A4640] hover:bg-[#FFF4EE] transition">
      $31
    </button>

    <button class="px-4 py-2 rounded-xl bg-[#B2402A] text-white shadow-sm border border-[#9E3A25]">
      $51
    </button>

    <button class="px-4 py-2 bg-white rounded-xl border text-[#5A4640] hover:bg-[#FFF4EE] transition">
      $101
    </button>

    <button class="px-4 py-2 bg-white rounded-xl border text-[#5A4640] hover:bg-[#FFF4EE] transition">
      Other
    </button>
  </div>

  <button class="w-full py-3 rounded-full border-2 border-[#B2402A] text-[#B2402A] font-medium hover:bg-[#B2402A] hover:text-white transition">
    Donate Now
  </button>

  <p class="text-center text-xs text-[#8C4F44] mt-3">
    Your seva supports daily temple services 🙏
  </p>
</div>

  )
  
}

export default App