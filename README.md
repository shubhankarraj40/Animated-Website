<h1 align="center">Animated Website with GSAP</h1>

<p align="center">Welcome to the Animated Website project! This interactive and modern website leverages the power of <strong>GSAP</strong> (GreenSock Animation Platform), combined with HTML, CSS, and JavaScript. Our primary goal is to showcase stunning visual animations while ensuring a seamless performance across all devices and browsers.</p>

<h2>Live Demo</h2>
<p>Experience the dynamic animations and responsive design firsthand by visiting our live demo of the website. Click <a href="https://yourwebsite.com" target="_blank">here</a> to explore the project in action. The site is fully responsive, delivering an optimized experience whether you're on a desktop or mobile device.</p>

<h2>Project Structure</h2>
<p>This project features a well-organized structure designed for easy maintenance and scalability:</p>
<ul>
  <li><code>index.html</code> - The main entry point of the website, containing the foundational HTML structure and links to CSS and JavaScript files.</li>
  <li><code>style.css</code> - This file encompasses all styling rules, ensuring a visually appealing layout and responsive behavior across various devices.</li>
  <li><code>script.js</code> - The heart of the project, where all GSAP-powered animations and user interactions are managed, enabling smooth transitions and dynamic effects.</li>
  <li><code>assets/</code> - A dedicated folder for storing images, fonts, and other resources utilized by the website (if applicable).</li>
</ul>

<h2>Features</h2>
<p>This project incorporates an array of features designed to elevate the user experience and highlight the capabilities of GSAP in web development:</p>
<ul>
  <li><strong>Responsive Animations:</strong> Animations seamlessly adapt to different screen sizes, ensuring a fluid experience for users on both desktop and mobile platforms.</li>
  <li><strong>Scroll-based Animations:</strong> Utilizing GSAP's <code>ScrollTrigger</code>, elements animate in response to the user's scrolling, creating an engaging and immersive journey.</li>
  <li><strong>Smooth Transitions:</strong> Transitions between elements are enhanced by GSAP’s easing functions, delivering a polished and professional animation feel.</li>
  <li><strong>Interactive Elements:</strong> Animations triggered by user interactions, such as hover effects and button clicks, provide real-time feedback and enhance user engagement.</li>
  <li><strong>Optimized Performance:</strong> The website is optimized for speed, ensuring quick load times even on devices with limited resources.</li>
</ul>

<h2>Technologies Used</h2>
<p>This project utilizes a combination of cutting-edge web technologies and libraries to achieve its functionality and visual effects:</p>
<ul>
  <li><strong>HTML5</strong> - Provides the semantic structure necessary for accessibility and search engine optimization.</li>
  <li><strong>CSS3</strong> - Custom styles are applied to create an attractive design, maintaining responsive behavior across devices.</li>
  <li><strong>JavaScript</strong> - Powers user interactions and integrates GSAP for animations, bringing the website to life with dynamic content.</li>
  <li><strong>GSAP (GreenSock Animation Platform)</strong> - The cornerstone of all animations and transitions, known for its performance and ability to handle complex animations effortlessly.</li>
</ul>

<h2>Installation</h2>
<p>To set up the project locally, follow these straightforward steps:</p>
<ol>
  <li>Clone the repository to your local machine using the following command:
    <pre><code>git clone https://github.com/shubhankarraj40/Animated-Website.git</code></pre>
  </li>
  <li>Navigate into the project directory:
    <pre><code>cd animated-website</code></pre>
  </li>
  <li>Open the <code>index.html</code> file in your web browser to view the website:
    <pre><code>open index.html</code></pre>
  </li>
</ol>

<h2>Screenshots</h2>
<p>Here are some snapshots showcasing the visual design and animation effects of the website:</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/e5d8d8f6-bf1b-444a-8a5c-b944a4489dc8" alt="Screenshot 1" width="400" />
  <img src="https://github.com/user-attachments/assets/4360a3df-5013-46a1-8d6b-5c22c505d3cb" alt="Screenshot 2" width="400" />
  <img src="https://github.com/user-attachments/assets/3f462777-76bc-4ee3-ae91-032afbb2bd7c" alt="Screenshot 3" width="400" />
</p>

<h2>Usage</h2>
<p>All animations and interactions are expertly managed using GSAP. You can easily modify existing animations or create new ones by editing the <code>script.js</code> file. GSAP's extensive API allows for the creation of various animations, from simple fades to intricate scroll-based effects.</p>

<p>For example, to animate an element with the class of <code>.box</code>, you can include the following code in <code>script.js</code>:</p>

```javascript
var tl = gsap.timeline()
tl.from("nav h1, nav h4, nav button",{
y:-40,
duration:0.5,
delay:0.6,
opacity:0,
stagger:0.15,
})
tl.from(".center1 h1,.center1 p,.center1 button",{
x:-300,
duration:0.4,
opacity:0,
})
tl.from(".center2 img",{
x:300,
opacity:0,
duration:0.5,
})//  },"-=1")--> 1secound pehle hin chal gya iske karan

tl.from(".section1bottom img",{
    opacity:0,
    duration:0.5,

},"-=1")
