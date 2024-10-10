<h1 align="center">Animated Website with GSAP</h1>

<p align="center">This project is an interactive and modern animated website built using <strong>GSAP</strong> (GreenSock Animation Platform), along with HTML, CSS, and JavaScript. The primary focus of this website is to showcase visually stunning animations while maintaining smooth performance across all devices and browsers.</p>

<h2>Live Demo</h2>
<p>You can view a live demo of the website by clicking <a href="https://yourwebsite.com" target="_blank">here</a>. The website is fully responsive, offering an optimized experience on both desktop and mobile devices.</p>

<h2>Project Structure</h2>
<p>The project follows a simple and organized structure to keep the codebase easy to maintain and scale.</p>
<ul>
  <li><code>index.html</code> - This is the entry point of the website. It contains the structure of the webpage and references to the CSS and JavaScript files.</li>
  <li><code>style.css</code> - This file contains all the styles used to design the layout, typography, and responsive behavior of the website. Custom CSS classes are used to ensure flexibility in styling and a clean look.</li>
  <li><code>script.js</code> - This JavaScript file handles all the GSAP-powered animations and user interactions. It is where the magic of smooth transitions and dynamic effects happens.</li>
  <li><code>assets/</code> - A folder to store images, fonts, or other resources used by the website (if applicable).</li>
</ul>

<h2>Features</h2>
<p>This project integrates a variety of features that aim to enhance the user experience and showcase the potential of using GSAP in web development.</p>
<ul>
  <li><strong>Responsive Animations:</strong> The animations adapt to different screen sizes, ensuring the experience remains fluid on both desktop and mobile devices.</li>
  <li><strong>Scroll-based Animations:</strong> Using GSAP's <code>ScrollTrigger</code>, elements are animated based on the user's scroll position, creating a dynamic and engaging user journey.</li>
  <li><strong>Smooth Transitions:</strong> Transitions between elements are powered by GSAP’s easing functions, providing a smooth, polished feel to every animation.</li>
  <li><strong>Interactive Elements:</strong> Hover effects, button clicks, and other user interactions are animated to provide real-time feedback and enhance the user’s engagement.</li>
  <li><strong>Optimized Performance:</strong> The website is optimized for performance to ensure fast load times, even on resource-constrained devices.</li>
</ul>

<h2>Technologies Used</h2>
<p>The project relies on a combination of modern web technologies and libraries to achieve its functionality and visual effects:</p>
<ul>
  <li><strong>HTML5</strong> - Provides the semantic structure of the website and organizes the content in a way that is accessible and readable by search engines.</li>
  <li><strong>CSS3</strong> - Custom styling is applied to layout the design, create visual aesthetics, and ensure responsive behavior across different screen sizes.</li>
  <li><strong>JavaScript</strong> - Used to handle user interactions and integrate GSAP for animations. It brings the website to life by adding dynamic behaviors.</li>
  <li><strong>GSAP (GreenSock Animation Platform)</strong> - The core animation library that powers all the animations and transitions on the website. GSAP offers high performance and is capable of handling complex animations with ease.</li>
</ul>

<h2>Installation</h2>
<p>To run this project locally, follow these steps:</p>
<ol>
  <li>Clone the repository to your local machine using the following command:
    <pre><code>git clone https://github.com/yourusername/animated-website.git</code></pre>
  </li>
  <li>Navigate to the project directory:
    <pre><code>cd animated-website</code></pre>
  </li>
  <li>Open the <code>index.html</code> file in your web browser to view the website:
    <pre><code>open index.html</code></pre>
  </li>
</ol>

<h2>Usage</h2>
<p>All animations and interactions are managed using GSAP. You can easily modify the existing animations or create new ones by editing the <code>script.js</code> file. GSAP provides a wide range of tools to create everything from simple fades to complex scroll-based animations.</p>

<p>For example, to animate an element with a class of <code>.box</code>, you can add the following code to <code>script.js</code>:</p>

```javascript
gsap.to(".box", {
  duration: 1.5,
  x: 200,
  ease: "power2.inOut",
  opacity: 1,
});
