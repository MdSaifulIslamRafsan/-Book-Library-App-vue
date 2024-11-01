<template>
    <footer class="footer bg-dark text-white py-10">
      <div class="container mx-auto px-4">
        <!-- Footer Sections in Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          <!-- About Section -->
          <div>
            <h2 class="text-xl font-bold mb-4">About the Library</h2>
            <p class="text-gray-400 text-sm">
              The Book Library App is dedicated to providing book lovers with a platform to discover, explore, and share a passion for reading. With a vast collection of titles, we aim to inspire and educate our readers.
            </p>
            <p class="text-gray-400 text-sm mt-2">
              Established in 2024, we connect readers with stories from every genre and era.
            </p>
          </div>
          <!-- Contact Information -->
          <div>
            <h2 class="text-xl font-bold mb-4">Contact Us</h2>
            <p class="text-gray-400 text-sm">
              Reach out with questions or feedback – we’d love to hear from you!
            </p>
            <p class="text-gray-400 text-sm mt-2">
              <strong>Email:</strong> support@booklibraryapp.com
            </p>
            <p class="text-gray-400 text-sm mt-1">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p class="text-gray-400 text-sm mt-1">
              <strong>Address:</strong> 123 Library Lane, Booktown, BK 12345
            </p>
          </div>
            <!-- FAQs -->
            <div>
              <h2 class="text-xl font-bold mb-4">FAQs</h2>
              <ul>
                <li><router-link to="/faq" class="text-white hover:text-gray-400">How to borrow books?</router-link></li>
                <li><router-link to="/faq" class="text-white hover:text-gray-400">Can I add my own books?</router-link></li>
                <li><router-link to="/faq" class="text-white hover:text-gray-400">What genres are available?</router-link></li>
                <li><router-link to="/faq" class="text-white hover:text-gray-400">How to contact support?</router-link></li>
              </ul>
            </div>
             <!-- Policies and Terms -->
             <div>
              <h2 class="text-xl font-bold mb-4">Legal</h2>
              <ul>
                <li><router-link to="/terms" class="text-white hover:text-gray-400">Terms & Conditions</router-link></li>
                <li><router-link to="/privacy" class="text-white hover:text-gray-400">Privacy Policy</router-link></li>
                <li><router-link to="/cookies" class="text-white hover:text-gray-400">Cookie Policy</router-link></li>
              </ul>
            </div>
    
            <!-- Social Media Links -->
            <div>
              <h2 class="text-xl font-bold mb-4">Follow Us</h2>
              <p class="text-gray-400 text-sm mb-4">Connect with us on social media!</p>
              <div class="flex">
                <a href="https://facebook.com" target="_blank" class="mx-2 text-white hover:text-blue-600">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" class="mx-2 text-white hover:text-blue-400">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" class="mx-2 text-white hover:text-pink-500">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" class="mx-2 text-white hover:text-blue-700">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        
        <!-- Copyright -->
        <div class="text-center mt-10 text-gray-400 text-sm">
          &copy; 2024 Book Library App. All rights reserved.
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #2d2d2d;
  }
  </style>
  