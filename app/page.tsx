import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <span>
      <div className="home">
      <video muted loop autoPlay>
        <source src="https://vod-progressive.akamaized.net/exp=1691856684~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4039%2F22%2F570195219%2F2695303931.mp4~hmac=30ffe72786d96a1d5e28bd68b23e08c531b71f3cedea97d566407b2ff34532c4/vimeo-prod-skyfire-std-us/01/4039/22/570195219/2695303931.mp4?filename=file.mp4" type="video/mp4"/>
      </video>
    </div>
    </span>
    
    <div>   
      <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <div className="col-span-2 row-span-5">1</div>
          <div className="col-span-3 row-span-3 col-start-3">2</div>
          <div className="row-span-2 col-start-3 row-start-4">3</div>
          <div className="col-span-2 row-span-2 col-start-4 row-start-4">4</div>
      </div>
    </div>
    </div>
  )
}
