const EmptyPlant = (props) => (
  <div class={`${props.display || 'flex'} justify-center mx-auto`}>
    <div class="rounded-2xl border border-[#E5E7EB] flex flex-col justify-start h-full items-center gap-6 p-8">
      <div class="flex justify-center items-center h-[240px] w-[240px] object-cover rounded-lg bg-gray-300 ">
        <svg
          class="w-12 h-12 text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 640 512"
        >
          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
        </svg>
      </div>
      <div class="desktop:h-9 h-[16px] w-4/5 flex items-center">
        <div class="desktop:h-5 h-3.5 bg-gray-300 rounded-full w-full"></div>
      </div>
      <div class="text-[#6B7280] desktop:h-6 h-[14px] w-3/5 flex items-center">
        <div class="desktop:h-4 h-3 bg-gray-200 rounded-full w-full"></div>
      </div>
      <div class="flex-[1_0_auto] w-full">
        <div role="status" class="space-y-2.5">
          <div class="flex items-center space-x-2 w-full">
            <div class="desktop:h-4 h-3 bg-gray-200 rounded-full w-1/5"></div>
            <div class="desktop:h-4 h-3 bg-gray-300 rounded-full w-full"></div>
            <div class="desktop:h-4 h-3 bg-gray-200 rounded-full w-2/5"></div>
          </div>
          <div class="flex items-center w-full space-x-2">
            <div class="desktop:h-4 h-3 bg-gray-300 rounded-full w-full"></div>
            <div class="desktop:h-4 h-3 bg-gray-200 rounded-full w-2/5"></div>
            <div class="desktop:h-4 h-3 bg-gray-300 rounded-full w-2/5"></div>
          </div>
          <div class="flex items-center w-full space-x-2">
            <div class="desktop:h-4 h-3 bg-gray-200 rounded-full w-1/5"></div>
            <div class="desktop:h-4 h-3 bg-gray-300 rounded-full w-full"></div>
            <div class="desktop:h-4 h-3 bg-gray-200 rounded-full w-2/5"></div>
          </div>
          <div class="flex items-center w-full space-x-2">
            <div class="desktop:h-4 h-3 bg-gray-300 rounded-full w-full"></div>
            <div class="desktop:h-4 h-3 bg-gray-200 rounded-full w-4/5"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { EmptyPlant }