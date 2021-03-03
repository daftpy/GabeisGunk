import React from "react"
import Header from "../components/header"
import HeroImg from "../components/heroImg"
import Article from "../components/article"
// import GabeImg from "../gabe1.png"

export default function Home() {
  return (
    <div className="siteContainer">
      <Header siteTitle="GabeisGunk" />
      {/* <img src={GabeImg} /> */}
      <HeroImg />
      <div className="contentContainer">
        <div className="articleContainer">
          <h2>Articles</h2>
          {/* <div className="article">
            <h3>Welcome to GabeisGunk</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed elit accumsan, porttitor diam ut, pharetra ligula. In ac imperdiet mauris. Sed sodales est lacinia porttitor mollis. Donec interdum nibh sed semper iaculis.</p>
            <p>Maecenas eu dolor mi. Ut quis lorem auctor, posuere est a, viverra enim. Mauris eu velit elit. Maecenas vel blandit massa. Sed et dui elementum, condimentum ex nec, accumsan nisi.</p>
          </div> */}
          <Article articleTitle="Test Article" articleBody="This is a test article." />
        </div>
        <div className="socialFeedContainer">
          <h2>Social</h2>
          <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@scout2015/video/6718335390845095173" data-video-id="6718335390845095173"> <section> <a target="_blank" title="@scout2015" href="https://www.tiktok.com/@scout2015">@scout2015</a> <p>Scramble up ur name & I’ll try to guess it😍❤️ <a title="foryoupage" target="_blank" href="https://www.tiktok.com/tag/foryoupage">#foryoupage</a> <a title="PetsOfTikTok" target="_blank" href="https://www.tiktok.com/tag/PetsOfTikTok">#petsoftiktok</a> <a title="aesthetic" target="_blank" href="https://www.tiktok.com/tag/aesthetic">#aesthetic</a></p> <a target="_blank" title="♬ original sound - tiff" href="https://www.tiktok.com/music/original-sound-6689804660171082501">♬ original sound - tiff</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
        </div>
      </div>
      <div className="siteFooter">
        <p>Site Footer</p>
      </div>
    </div>
  );
}
