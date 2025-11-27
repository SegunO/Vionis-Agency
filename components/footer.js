class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #000000;
                }
                .footer-divider {
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #5D8AA8, transparent);
                }
                .banner-container {
                    background: url('https://huggingface.co/spaces/segunoluwadele/vionis-metallic-horizon/resolve/main/images/Vionis-Landscape-Logo.png');
background-size: cover;
                    background-position: center;
                    height: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 2rem;
                }
                .footer-content {
                    max-width: 7xl;
                    margin: 0 auto;
                }
            </style>
            <footer class="py-16">
                <div class="banner-container"></div>
                <div class="footer-content px-4">
                    <div class="footer-divider my-12"></div>
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <div class="mb-8 md:mb-0 bg-black bg-opacity-30 p-6 rounded-lg border border-metallic-blue">
                            <div class="text-center">
                                <span class="text-2xl font-bold text-metallic-silver">VIONIS</span>
                                <p class="text-gray-400 mt-2">High-reliability website hosting for trades</p>
                            </div>
                        </div>
<div class="flex space-x-6">
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                <i data-feather="mail"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                <i data-feather="phone"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                <i data-feather="twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div class="footer-divider my-12"></div>
                    <div class="text-center text-gray-500 text-sm bg-black bg-opacity-30 p-4 rounded-lg border border-metallic-blue">
                        <p>© ${new Date().getFullYear()} Vionis Agency. All rights reserved.</p>
                        <div class="mt-4 space-x-6">
<a href="#" class="hover:text-gray-300">Terms</a>
                            <a href="#" class="hover:text-gray-300">Privacy</a>
                            <a href="#" class="hover:text-gray-300">SLA</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
