const projects = [
  {
    id: "breathsonix",
    title: "Breathsonix – Fisher & Paykel Healthcare",
    thumbnail: "assets/images/Breathsonixmask.jpg",
    images: [
      "assets/images/Breathsonixschematic.png",
      "assets/images/BreathsonixPhase.png"
    ],
    courseInfo: {
      course: "MECHENG700",
      date: "Oct 2024",
      participants: "Mustafa Laxmidhar, Shaquille Khan",
      supervisors: "Vladislav Sorokin, Andrew Hall, Nima Hosseini, Andrew Hillard"
    },
    details: `<p>As part of my final-year project, I worked on BreathSonix—an initiative sponsored by Fisher & Paykel Healthcare—exploring how respiratory sounds can be used to monitor breathing in a non-invasive way.</p>

<p>The goal was to develop a system capable of extracting meaningful metrics from breathing patterns, especially while patients are on nasal high flow therapy. I focused on capturing and analysing respiratory audio using a combination of signal processing, acoustic analysis, and machine learning.</p>

<p>This involved everything from selecting the right hardware and collecting high-quality data, to building predictive models and refining algorithms to detect respiratory metrics like breathing rate and pattern shifts.</p>

<p>What made the project especially rewarding was its potential for real-world impact in medical technology. I had the chance to work closely with advisors from Fisher & Paykel, and used tools like lung simulators and lab setups to validate our approach. It was a hands-on, end-to-end experience—everything from concept and research to testing and refinement.</p>`
  },
  {
    id: "firefighter",
    title: "FireFighter Robot",
    thumbnail: "assets/images/firefighter.jpg",
    images: [
      "assets/images/firewiring.jpg"
    ],
    courseInfo: {
      course: "MECHENG706",
      date: "Nov 2023",
      participants: "Mustafa Laxmidhar, Shaquille Khan, Anirudh Rayudu, Shivam Desai"
    },
    details: `<p>As part of a robotics project, I designed and built an autonomous robot capable of detecting and extinguishing two candles while navigating around static and moving obstacles within a confined, walled environment. The core objective was to create a robot that could operate independently from an unknown starting position, extinguish both fires, and then halt all motion—demonstrating robust autonomous decision-making.<p>

<p>I implemented a behaviour-based control architecture in C++ to coordinate sensing, navigation, and actuation. The robot relied on a combination of infrared sensors, ultrasonic sensors, and light-dependent resistors (LDRs) to detect fire and avoid obstacles in real time. To house and position the sensors precisely, I designed and 3D printed custom mounts, ensuring consistent performance and protection during testing.<p>

<p>Key challenges included synchronising multiple sensor inputs to enable accurate decision-making, developing reliable fire detection logic, and maintaining smooth obstacle avoidance without compromising navigation efficiency. A dual fan-based extinguishing mechanism was integrated and triggered when the robot moved within 20 cm of a fire source.<p>

<p>The robot successfully completed its tasks, extinguishing both fires in under a minute, and earned 59 out of 60 points in the final demonstration. Through this project, I gained hands-on experience with embedded systems, autonomous navigation, sensor integration, and the development of multi-task robotic behaviours.<p>`
  },
  {
    id: "computer-vision",
    title: "Weld Gap Detection Using Computer Vision",
    thumbnail: "assets/images/cvfinal.jpg",
    images: [
      "assets/images/cvinterim.jpg",
      "assets/images/cvinterimB.jpg",
    ],
    courseInfo: {
      course: "MECHENG709",
      date: "May 2024",
      participants: "Mustafa Laxmidhar, Chante DeVilliers, Janusha Gunasekara",
    },
    details: `<p>As part of a manufacturing-focused project, I developed a lightweight computer vision system to detect the precise location of a weld gap between two metal sheets—crucial for aligning an automated welding gun with pixel-level accuracy. The system was designed to run on a Raspberry Pi, making computational efficiency a key constraint from the outset.<p>

<p>Using Python and OpenCV, I implemented a real-time image processing pipeline capable of filtering out visual noise and reliably identifying the weld gap. I applied FFT transformations and bilateral filtering techniques to reduce background interference and sharpen relevant edges, which significantly improved detection consistency under varied lighting and surface conditions.<p>

<p>To locate the weld gap, I used a geometric reasoning algorithm that analysed filtered edge data and calculated the most probable position of the gap. The result was a responsive, real-time detection system that could guide the welding process with precision—all while running efficiently on low-power embedded hardware.<p>

<p>Key challenges included managing detection accuracy with limited processing power and ensuring the system remained robust to inconsistencies in metal surface texture and lighting. Overcoming these led to a compact and practical vision solution suitable for integration into automated manufacturing environments.<p>

<p>This project gave me hands-on experience in computer vision, embedded system optimisation, and real-time image analysis. It deepened my understanding of how to balance performance and efficiency in resource-constrained environments.<p>`
  },
  {
    id: "prosthetic-gripper",
    title: "3D Prosthetic Gripper",
    thumbnail: "assets/images/prostheticgripper.jpg",
    images: [
      "assets/images/gripperassembly.png",
      "assets/images/gripperegg.jpg"
    ],
    courseInfo: {
      course: "MECHENG736",
      date: "Oct 2024",
      participants: "Mustafa Laxmidhar, Shaquille Khan, Tane Herbert",
    },
    details: `<p>For this project, I designed a prosthetic gripper capable of picking up a variety of objects—including an M2 washer, a hammer, a chain, and an egg-shaped object—using just a single motor for actuation. The goal was to create a lightweight, low-cost solution that could replicate the adaptive grip of a human hand with minimal mechanical complexity.</p> 
    
    <p>The design was modelled in Onshape using collaborative CAD tools, allowing for seamless team input and iteration. To distribute force effectively across multiple fingers from a single actuator, I implemented a Whipple tree mechanism—a passive mechanical linkage that equalises movement and grip pressure across all digits. This approach enabled precise, compliant gripping without the need for additional motors or sensors.</p> 
    
    <p>Parts were manufactured through rapid 3D printing, allowing for quick prototyping and refinement. The final gripper was able to successfully lift 6 out of the 7 target objects, including the challenging M2 washer, demonstrating both precision and adaptability in its design.</p> 
    
    <p>Throughout this project, I deepened my understanding of compliant mechanical systems, refined my CAD design skills, and gained valuable experience in prototyping under mechanical constraints. It was a rewarding exercise in balancing simplicity with functionality, and in designing for real-world usability on a limited actuation system.</p>`
  }
];


function renderProjectCards() {
  const container = document.querySelector('.projects-container');
  
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${project.thumbnail}" alt="${project.title}" class="project-thumbnail">
      <div class="project-content">
        <h3>${project.title}</h3>
        <a href="project-details.html?id=${project.id}" class="btn btn-primary">Learn More</a>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderProjectCards);