
class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: #f8f9fa;
                    backdrop-filter: blur(10px);
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0.8rem 2rem;
                    display: flex;
                    align-items: center;
                }
                .nav-brand {
                    display: flex;
                    align-items: center;
                    height: 100%;
                }
                .nav-brand img {
                    height: 28px;
                    width: auto;
                }
.nav-center {
                    flex-grow: 1;
                    display: flex;
                    justify-content: center;
                }
                .nav-buttons {
                    display: flex;
                    gap: 1rem;
                    background: #e9ecef;
                    padding: 0.5rem;
                    border-radius: 50px;
                }
                .nav-button {
                    padding: 0.5rem 1.25rem;
                    border-radius: 50px;
                    font-weight: 500;
                    color: #495057;
                    transition: all 0.2s ease;
                    text-decoration: none;
                }
                .nav-button:hover {
                    background: white;
                    color: #212529;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                }
                .nav-button.active {
                    background: white;
                    color: #212529;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                }
                .get-started-btn {
                    background: #5D8AA8;
                    color: white;
                    padding: 0.5rem 1.25rem;
                    border-radius: 50px;
                    font-weight: 600;
                    transition: all 0.2s ease;
                    margin-left: 1rem;
                }
                .get-started-btn:hover {
                    background: #4a7491;
                    color: white;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                }
            </style>
            <nav class="fixed w-full z-50">
                <div class="nav-container">
                    <a href="index.html" class="nav-brand">
                    <img src="https://huggingface.co/spaces/segunoluwadele/vionis-metallic-horizon/resolve/main/images/Vionis-Transparent-Logo-nobg.svg" alt="Vionis Logo" class="h-12">
</a>
<div class="nav-center">
                        <div class="nav-buttons">
                            <a href="index.html" class="nav-button active">Home</a>
                            <a href="how-it-works.html" class="nav-button">How It Works</a>
                            <a href="faq.html" class="nav-button">FAQ</a>
                        </div>
                    </div>
                    <a href="how-it-works.html" class="get-started-btn">GET STARTED</a>
                </div>
            </nav>
`;
    }
}

customElements.define('custom-header', CustomHeader);
