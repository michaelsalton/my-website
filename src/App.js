import './App.css';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import email from './images/email.png';
import instagram from './images/instagram.png';
import chevronDown from './images/chevron-down.png';
import tiktok from './images/tiktok.png';
import youtube from './images/youtube.png';
import rocks from './images/rocks.png';
import cv from './images/CV.png';
import resume from './images/michael_salton_resume.pdf';
import tree from './images/tree.png';
import map from './images/map.png';
import ue4 from './images/ue4.png';
import website from './images/website.png';

function App() {
  return (
    <html>
      <body id="home">
        <nav>
          <div class="navBox">
            <ul>
              <li>
                <a href="#home">HOME</a>
              </li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#projects">PROJECTS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </nav>

        <main>
          <div class="title">
            <h1> Michael Salton </h1>
            <div class="description"> 
              <p> Software developer </p>
            </div>
            <div class="downloadCV">
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <img src={cv} alt=""  width="25%" height="25%"/>
              </a>
            </div>
          </div> {/* End of title div */}
          <div class="frontLinks">
            <a href="https://www.linkedin.com/in/msalton/">
              <img class = "padding" src={linkedin} alt="" width="15" height="15"/>
            </a>
            
            <a href="https://github.com/michaelsalton">
              <img class = "padding" src={github} alt="" width="15" height="15"/>
            </a>

            <a href="mailto: msalton6@gmail.com">
              <img class = "padding" src={email} alt="" width="15" height="15"/>
            </a>

            <a href="https://www.instagram.com/michaelsalton_/">
              <img class = "padding" src={instagram} alt="" width="15" height="15"/>
            </a>

            <a href="https://www.tiktok.com/@michaelsalton">
              <img class = "padding" src={tiktok} alt="" width="15" height="15"/>
            </a>

            <a href="https://www.youtube.com/c/MichaelSalton">
              <img class = "padding" src={youtube} alt="" width="15" height="15"/>
            </a>
          </div> {/* End of frontLinks div*/}
        </main>

        <div class ="about" id="about">
          <div class="textSection">
            <div class="tree">
              <img class = "padding" src={tree} alt="" width="100%" height="90%"/>
            </div>
            <div class="textRight">
              <h2> ⎯ About Me </h2>
              <p> Hello world, I'm Michael Salton. I am a student at Western University 
              pursuing a bachelor's degree in Computer Science with a minor in Game Development.</p>
              <p> I have experience across many fields including IOS development, web development, and 
              video game development. I am profficient with a multitude of languages and software including:
              Java, Python, C, C#, C++, Swift, React, HTML, CSS, Unix/Linux, Unreal Engine, Unity, 
              Arm Assembly, and more.</p>
              <p> I am currently working as an Application Developer at Peavey Industries L.P. Here,
                 I founded a new development team that works on creating warehouse software applications
                related to inventory management, databases, and navigation.</p>
              <p> I am currently looking for 2023 internship opportunities.</p>
            </div>
          </div>
        </div>  {/* End of about div */}

        <div class ="projects" id="projects">
          <div class="textSection">
            <div class="projectsTitle">
              <h2> ⎯ Projects </h2>
            </div>

            <div class="project1">
              <img src={map} alt="" width="100%" height="55%" class="roundCorners"/>
              <h3> Product Locator App</h3>
              <p> An application I independantly made for Peavey Industries L.P. Its purpose is to 
                display thee location of a product on the map. It was made using 
                Swift and AutoCAD.
              </p>
            </div>

            <div class="project2">
            <img src={ue4} alt="" width="100%" height="55%" class="roundCorners"/>
            <h3> Unreal Engine Video Game </h3>
              <p> I made a Nordic horror themed game based around exploration and immersion. 
                It was made using Unreal Engine, C++, Blender, Photoshop, and Quixel Megascans.
              </p>
            </div>

            <div class="project3">
            <img src={website} alt="" width="100%" height="55%" class="roundCorners"/>
            <h3> Personal Website </h3>
              <p> My personal website I made using React, HTML, and CSS.
                I plan to continue to improve my website as my web development skills evolve.
              </p>
            </div>
          </div>
        </div>  {/* End of projects div */}

        <div class="topFooter">
          <div class="icons">
            <a href="#about">
              <img class = "padding" src={chevronDown} alt="" width="50" height="50"/>
            </a>
          </div> {/* End of icons div */}
        </div> {/* End of top footer div */}

        <footer>
          <div class="footerLinks">
            <a href="https://www.linkedin.com/in/msalton/">
              <p> LinkedIn </p>
            </a>
            <a href="https://github.com/michaelsalton">
              <p> GitHub </p>
            </a>
            <a href="https://www.tiktok.com/@michaelsalton">
              <p> TikTok </p>
            </a>
            <a href="https://www.youtube.com/c/MichaelSalton">
              <p> YouTube </p>
            </a>
            <a href="https://www.instagram.com/michaelsalton_/">
              <p> Instagram </p>
            </a>
            <a href="mailto: msalton6@gmail.com">
              <p> Email </p>
            </a>
          </div>
          <div class="footerEmail">
            <p> Contact me on any social media or send me an email at 
            <a href="mailto: msalton6@gmail.com"> msalton6@gmail.com.</a> </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

export default App;
