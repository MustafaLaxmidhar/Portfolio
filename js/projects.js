const projects = [
  {
    id: "breathsonix",
    title: "Breathsonix – Fisher & Paykel Healthcare",
    thumbnail: "assets/images/Breathsonixmask.jpg",
    images: [
      "assets/images/Breathsonixschematic.png",
      "assets/images/BreathsonixPhase.png"
    ],
    details: `A detailed description that can include:
- Project goals and objectives: Develop a method to analyze respiratory sounds and accurately predict respiratory health metrics.
- Technologies used: Python, scikit-learn, NumPy, simulated lung datasets.
- Challenges overcome: Extracting meaningful features from acoustic signals and selecting optimal machine learning models for prediction accuracy.
- Implementation details: Built and trained multiple models using supervised learning techniques. Preprocessed audio data using signal processing techniques.
- Key features: Real-time prediction capability, model accuracy around 90%.
- Learning outcomes: Gained experience in medical signal processing, model evaluation, and integrating machine learning in healthcare applications.`
  },
  {
    id: "firefighter",
    title: "FireFighter Robot",
    thumbnail: "assets/images/firefighter.jpg",
    images: [
      "assets/images/firewiring.jpg"
    ],
    details: `A detailed description that can include:
- Project goals and objectives: Build an autonomous robot that can extinguish two candles and avoid static and dynamic obstacles.
- Technologies used: C++, IR sensors, ultrasonic sensors, LDRs, 3D printing.
- Challenges overcome: Coordinating sensor inputs for decision making, designing reliable fire detection logic, and ensuring obstacle avoidance.
- Implementation details: Programmed behavior-based architecture in C++ to manage sensing, navigation, and actuation. Custom 3D-printed enclosures for sensor mounting.
- Key features: Dual fire extinguishing system, real-time obstacle detection and avoidance.
- Learning outcomes: Developed skills in embedded systems, autonomous navigation, and multi-task robotic behavior control.`
  },
  {
    id: "computer-vision",
    title: "Weld Gap Detection Using Computer Vision",
    thumbnail: "assets/images/weld.jpg",
    images: [
      "assets/images/cvfinal.jpg",
      "assets/images/cvinterim.jpg",
      "assets/images/cvinterimB.jpg",
    ],
    details: `A detailed description that can include:
- Project goals and objectives: Detect the precise location of a weld gap between two metal sheets using a lightweight computer vision solution.
- Technologies used: Python, OpenCV, Raspberry Pi.
- Challenges overcome: Maintaining detection accuracy with limited computational resources; filtering out visual noise.
- Implementation details: Used FFT transformation and bilateral filters for noise reduction. Geometric reasoning algorithms localized the weld gap with pixel-level precision.
- Key features: Edge filtering, geometric analysis, real-time gap detection on embedded hardware.
- Learning outcomes: Strengthened skills in computer vision, real-time image processing, and embedded system optimization.`
  },
  {
    id: "prosthetic-gripper",
    title: "3D Prosthetic Gripper",
    thumbnail: "assets/images/prostheticgripper.jpg",
    images: [
      "assets/images/gripperassembly.png",
      "assets/images/gripperegg.jpg"
    ],
    details: `A detailed description that can include:
- Project goals and objectives: Design a prosthetic gripper capable of picking up varied objects using a single motor.
- Technologies used: Onshape, 3D printing, mechanical linkages (Whipple tree).
- Challenges overcome: Designing efficient force distribution using a single actuator while maintaining precision.
- Implementation details: CAD designed in Onshape, printed using additive manufacturing. A Whipple tree mechanism enabled the movement of multiple fingers from one actuator.
- Key features: Lightweight, low-cost, 3D-printed parts with single-motor articulation.
- Learning outcomes: Improved proficiency in collaborative CAD, rapid prototyping, and compliant mechanical design.`
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