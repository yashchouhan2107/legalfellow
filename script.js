document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        if(questionBtn) {
            questionBtn.addEventListener('click', () => {
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const icon = otherItem.querySelector('.icon');
                        if(icon) icon.textContent = '+';
                    }
                
    
    // --- Get Started Modal Logic ---
    const getStartedBtn = document.getElementById('btn-get-started');
    const contactModal = document.getElementById('contact-modal');
    const closeContactModal = document.getElementById('close-contact-modal');
    const popupContactForm = document.getElementById('popup-contact-form');
    const successMsg = document.getElementById('contact-success-msg');

    if (getStartedBtn && contactModal) {
        getStartedBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        if (closeContactModal) {
            closeContactModal.addEventListener('click', () => {
                contactModal.style.display = 'none';
                if (!document.getElementById('bci-disclaimer') || document.getElementById('bci-disclaimer').style.display === 'none') {
                    document.body.style.overflow = 'auto'; 
                }
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.style.display = 'none';
                if (!document.getElementById('bci-disclaimer') || document.getElementById('bci-disclaimer').style.display === 'none') {
                    document.body.style.overflow = 'auto'; 
                }
            }
        });

        
        // Helper function to send email via FormSubmit
        function sendEmail(formElement, successElement, errorElement, isPopup) {
            const submitBtn = formElement.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            const formData = new FormData(formElement);
            const data = Object.fromEntries(formData.entries());
            data._captcha = "false"; // Disable recaptcha for smoother UX
            data._subject = "New Legal Consultation Request";

            fetch("https://formsubmit.co/ajax/saloni.legal@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if(successElement) successElement.style.display = 'block';
                if(errorElement) errorElement.style.display = 'none';
                formElement.reset();
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
                
                if (isPopup) {
                    setTimeout(() => {
                        contactModal.style.display = 'none';
                        if(successElement) successElement.style.display = 'none';
                        if (!document.getElementById('bci-disclaimer') || document.getElementById('bci-disclaimer').style.display === 'none') {
                            document.body.style.overflow = 'auto'; 
                        }
                    }, 3000);
                } else {
                    setTimeout(() => {
                        if(successElement) successElement.style.display = 'none';
                    }, 5000);
                }
            })
            .catch(error => {
                console.error("Error:", error);
                if(errorElement) errorElement.style.display = 'block';
                if(successElement) successElement.style.display = 'none';
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
        }

        const errorMsg = document.getElementById('contact-error-msg');
        
        if (popupContactForm) {
            popupContactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                sendEmail(popupContactForm, successMsg, errorMsg, true);
            });
        }

        const footerForm = document.getElementById('footer-contact-form');
        const footerSuccess = document.getElementById('footer-success-msg');
        const footerError = document.getElementById('footer-error-msg');

        if (footerForm) {
            footerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                sendEmail(footerForm, footerSuccess, footerError, false);
            });
        }

    }
    // --- End Modal Logic ---

    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

});
                item.classList.toggle('active');
                const icon = item.querySelector('.icon');
                if(icon) {
                    icon.textContent = item.classList.contains('active') ? '-' : '+';
                }
            
    
    // --- Get Started Modal Logic ---
    const getStartedBtn = document.getElementById('btn-get-started');
    const contactModal = document.getElementById('contact-modal');
    const closeContactModal = document.getElementById('close-contact-modal');
    const popupContactForm = document.getElementById('popup-contact-form');
    const successMsg = document.getElementById('contact-success-msg');

    if (getStartedBtn && contactModal) {
        getStartedBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        if (closeContactModal) {
            closeContactModal.addEventListener('click', () => {
                contactModal.style.display = 'none';
                if (!document.getElementById('bci-disclaimer') || document.getElementById('bci-disclaimer').style.display === 'none') {
                    document.body.style.overflow = 'auto'; 
                }
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.style.display = 'none';
                if (!document.getElementById('bci-disclaimer') || document.getElementById('bci-disclaimer').style.display === 'none') {
                    document.body.style.overflow = 'auto'; 
                }
            }
        });

        
        // Helper function to send email via FormSubmit
        function sendEmail(formElement, successElement, errorElement, isPopup) {
            const submitBtn = formElement.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            const formData = new FormData(formElement);
            const data = Object.fromEntries(formData.entries());
            data._captcha = "false"; // Disable recaptcha for smoother UX
            data._subject = "New Legal Consultation Request";

            fetch("https://formsubmit.co/ajax/saloni.legal@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if(successElement) successElement.style.display = 'block';
                if(errorElement) errorElement.style.display = 'none';
                formElement.reset();
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
                
                if (isPopup) {
                    setTimeout(() => {
                        contactModal.style.display = 'none';
                        if(successElement) successElement.style.display = 'none';
                        if (!document.getElementById('bci-disclaimer') || document.getElementById('bci-disclaimer').style.display === 'none') {
                            document.body.style.overflow = 'auto'; 
                        }
                    }, 3000);
                } else {
                    setTimeout(() => {
                        if(successElement) successElement.style.display = 'none';
                    }, 5000);
                }
            })
            .catch(error => {
                console.error("Error:", error);
                if(errorElement) errorElement.style.display = 'block';
                if(successElement) successElement.style.display = 'none';
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
        }

        const errorMsg = document.getElementById('contact-error-msg');
        
        if (popupContactForm) {
            popupContactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                sendEmail(popupContactForm, successMsg, errorMsg, true);
            });
        }

        const footerForm = document.getElementById('footer-contact-form');
        const footerSuccess = document.getElementById('footer-success-msg');
        const footerError = document.getElementById('footer-error-msg');

        if (footerForm) {
            footerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                sendEmail(footerForm, footerSuccess, footerError, false);
            });
        }

    }
    // --- End Modal Logic ---

    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

});
        }
    
    
    // --- Get Started Modal Logic ---
    const getStartedBtn = document.getElementById('btn-get-started');
    const contactModal = document.getElementById('contact-modal');
    const closeContactModal = document.getElementById('close-contact-modal');
    const popupContactForm = document.getElementById('popup-contact-form');
    const successMsg = document.getElementById('contact-success-msg');

    if (getStartedBtn && contactModal) {
        getStartedBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        if (closeContactModal) {
            closeContactModal.addEventListener('click', () => {
                contactModal.style.display = 'none';
                if (!document.getElementById('bci-disclaimer') || document.getElementById('bci-disclaimer').style.display === 'none') {
                    document.body.style.overflow = 'auto'; 
                }
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.style.display = 'none';
                if (!document.getElementById('bci-disclaimer') || document.getElementById('bci-disclaimer').style.display === 'none') {
                    document.body.style.overflow = 'auto'; 
                }
            }
        });

        
        // Helper function to send email via FormSubmit
        function sendEmail(formElement, successElement, errorElement, isPopup) {
            const submitBtn = formElement.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            const formData = new FormData(formElement);
            const data = Object.fromEntries(formData.entries());
            data._captcha = "false"; // Disable recaptcha for smoother UX
            data._subject = "New Legal Consultation Request";

            fetch("https://formsubmit.co/ajax/saloni.legal@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if(successElement) successElement.style.display = 'block';
                if(errorElement) errorElement.style.display = 'none';
                formElement.reset();
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
                
                if (isPopup) {
                    setTimeout(() => {
                        contactModal.style.display = 'none';
                        if(successElement) successElement.style.display = 'none';
                        if (!document.getElementById('bci-disclaimer') || document.getElementById('bci-disclaimer').style.display === 'none') {
                            document.body.style.overflow = 'auto'; 
                        }
                    }, 3000);
                } else {
                    setTimeout(() => {
                        if(successElement) successElement.style.display = 'none';
                    }, 5000);
                }
            })
            .catch(error => {
                console.error("Error:", error);
                if(errorElement) errorElement.style.display = 'block';
                if(successElement) successElement.style.display = 'none';
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
        }

        const errorMsg = document.getElementById('contact-error-msg');
        
        if (popupContactForm) {
            popupContactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                sendEmail(popupContactForm, successMsg, errorMsg, true);
            });
        }

        const footerForm = document.getElementById('footer-contact-form');
        const footerSuccess = document.getElementById('footer-success-msg');
        const footerError = document.getElementById('footer-error-msg');

        if (footerForm) {
            footerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                sendEmail(footerForm, footerSuccess, footerError, false);
            });
        }

    }
    // --- End Modal Logic ---

    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

});

    // BCI Disclaimer Logic
    const disclaimer = document.getElementById('bci-disclaimer');
    const btnAgree = document.getElementById('btn-agree');
    const btnDecline = document.getElementById('btn-decline');

    if (disclaimer && !localStorage.getItem('bci_agreed')) {
        disclaimer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    if (btnAgree) {
        btnAgree.addEventListener('click', () => {
            localStorage.setItem('bci_agreed', 'true');
            disclaimer.style.display = 'none';
            document.body.style.overflow = 'auto';
        
    
    // --- Get Started Modal Logic ---
    const getStartedBtn = document.getElementById('btn-get-started');
    const contactModal = document.getElementById('contact-modal');
    const closeContactModal = document.getElementById('close-contact-modal');
    const popupContactForm = document.getElementById('popup-contact-form');
    const successMsg = document.getElementById('contact-success-msg');

    if (getStartedBtn && contactModal) {
        getStartedBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        if (closeContactModal) {
            closeContactModal.addEventListener('click', () => {
                contactModal.style.display = 'none';
                if (!document.getElementById('bci-disclaimer') || document.getElementById('bci-disclaimer').style.display === 'none') {
                    document.body.style.overflow = 'auto'; 
                }
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.style.display = 'none';
                if (!document.getElementById('bci-disclaimer') || document.getElementById('bci-disclaimer').style.display === 'none') {
                    document.body.style.overflow = 'auto'; 
                }
            }
        });

        
        // Helper function to send email via FormSubmit
        function sendEmail(formElement, successElement, errorElement, isPopup) {
            const submitBtn = formElement.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            const formData = new FormData(formElement);
            const data = Object.fromEntries(formData.entries());
            data._captcha = "false"; // Disable recaptcha for smoother UX
            data._subject = "New Legal Consultation Request";

            fetch("https://formsubmit.co/ajax/saloni.legal@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if(successElement) successElement.style.display = 'block';
                if(errorElement) errorElement.style.display = 'none';
                formElement.reset();
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
                
                if (isPopup) {
                    setTimeout(() => {
                        contactModal.style.display = 'none';
                        if(successElement) successElement.style.display = 'none';
                        if (!document.getElementById('bci-disclaimer') || document.getElementById('bci-disclaimer').style.display === 'none') {
                            document.body.style.overflow = 'auto'; 
                        }
                    }, 3000);
                } else {
                    setTimeout(() => {
                        if(successElement) successElement.style.display = 'none';
                    }, 5000);
                }
            })
            .catch(error => {
                console.error("Error:", error);
                if(errorElement) errorElement.style.display = 'block';
                if(successElement) successElement.style.display = 'none';
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
        }

        const errorMsg = document.getElementById('contact-error-msg');
        
        if (popupContactForm) {
            popupContactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                sendEmail(popupContactForm, successMsg, errorMsg, true);
            });
        }

        const footerForm = document.getElementById('footer-contact-form');
        const footerSuccess = document.getElementById('footer-success-msg');
        const footerError = document.getElementById('footer-error-msg');

        if (footerForm) {
            footerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                sendEmail(footerForm, footerSuccess, footerError, false);
            });
        }

    }
    // --- End Modal Logic ---

    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

});
    }

    if (btnDecline) {
        btnDecline.addEventListener('click', () => {
            document.body.innerHTML = '<div style="display:flex; justify-content:center; align-items:center; height:100vh; text-align:center; font-family:sans-serif;"><h2>You must agree to the disclaimer to view this website.</h2></div>';
        
    
    // --- Get Started Modal Logic ---
    const getStartedBtn = document.getElementById('btn-get-started');
    const contactModal = document.getElementById('contact-modal');
    const closeContactModal = document.getElementById('close-contact-modal');
    const popupContactForm = document.getElementById('popup-contact-form');
    const successMsg = document.getElementById('contact-success-msg');

    if (getStartedBtn && contactModal) {
        getStartedBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        if (closeContactModal) {
            closeContactModal.addEventListener('click', () => {
                contactModal.style.display = 'none';
                if (!document.getElementById('bci-disclaimer') || document.getElementById('bci-disclaimer').style.display === 'none') {
                    document.body.style.overflow = 'auto'; 
                }
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.style.display = 'none';
                if (!document.getElementById('bci-disclaimer') || document.getElementById('bci-disclaimer').style.display === 'none') {
                    document.body.style.overflow = 'auto'; 
                }
            }
        });

        
        // Helper function to send email via FormSubmit
        function sendEmail(formElement, successElement, errorElement, isPopup) {
            const submitBtn = formElement.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            const formData = new FormData(formElement);
            const data = Object.fromEntries(formData.entries());
            data._captcha = "false"; // Disable recaptcha for smoother UX
            data._subject = "New Legal Consultation Request";

            fetch("https://formsubmit.co/ajax/saloni.legal@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if(successElement) successElement.style.display = 'block';
                if(errorElement) errorElement.style.display = 'none';
                formElement.reset();
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
                
                if (isPopup) {
                    setTimeout(() => {
                        contactModal.style.display = 'none';
                        if(successElement) successElement.style.display = 'none';
                        if (!document.getElementById('bci-disclaimer') || document.getElementById('bci-disclaimer').style.display === 'none') {
                            document.body.style.overflow = 'auto'; 
                        }
                    }, 3000);
                } else {
                    setTimeout(() => {
                        if(successElement) successElement.style.display = 'none';
                    }, 5000);
                }
            })
            .catch(error => {
                console.error("Error:", error);
                if(errorElement) errorElement.style.display = 'block';
                if(successElement) successElement.style.display = 'none';
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
        }

        const errorMsg = document.getElementById('contact-error-msg');
        
        if (popupContactForm) {
            popupContactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                sendEmail(popupContactForm, successMsg, errorMsg, true);
            });
        }

        const footerForm = document.getElementById('footer-contact-form');
        const footerSuccess = document.getElementById('footer-success-msg');
        const footerError = document.getElementById('footer-error-msg');

        if (footerForm) {
            footerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                sendEmail(footerForm, footerSuccess, footerError, false);
            });
        }

    }
    // --- End Modal Logic ---

    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

});
    }

    // Reveal Animations
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 50; 
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("reveal-visible");
            }
        }
    }
    window.addEventListener("scroll", reveal);
    // Trigger once on load
    setTimeout(reveal, 100);

    
    // --- Get Started Modal Logic ---
    const getStartedBtn = document.getElementById('btn-get-started');
    const contactModal = document.getElementById('contact-modal');
    const closeContactModal = document.getElementById('close-contact-modal');
    const popupContactForm = document.getElementById('popup-contact-form');
    const successMsg = document.getElementById('contact-success-msg');

    if (getStartedBtn && contactModal) {
        getStartedBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        if (closeContactModal) {
            closeContactModal.addEventListener('click', () => {
                contactModal.style.display = 'none';
                if (!document.getElementById('bci-disclaimer') || document.getElementById('bci-disclaimer').style.display === 'none') {
                    document.body.style.overflow = 'auto'; 
                }
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.style.display = 'none';
                if (!document.getElementById('bci-disclaimer') || document.getElementById('bci-disclaimer').style.display === 'none') {
                    document.body.style.overflow = 'auto'; 
                }
            }
        });

        
        // Helper function to send email via FormSubmit
        function sendEmail(formElement, successElement, errorElement, isPopup) {
            const submitBtn = formElement.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            const formData = new FormData(formElement);
            const data = Object.fromEntries(formData.entries());
            data._captcha = "false"; // Disable recaptcha for smoother UX
            data._subject = "New Legal Consultation Request";

            fetch("https://formsubmit.co/ajax/saloni.legal@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if(successElement) successElement.style.display = 'block';
                if(errorElement) errorElement.style.display = 'none';
                formElement.reset();
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
                
                if (isPopup) {
                    setTimeout(() => {
                        contactModal.style.display = 'none';
                        if(successElement) successElement.style.display = 'none';
                        if (!document.getElementById('bci-disclaimer') || document.getElementById('bci-disclaimer').style.display === 'none') {
                            document.body.style.overflow = 'auto'; 
                        }
                    }, 3000);
                } else {
                    setTimeout(() => {
                        if(successElement) successElement.style.display = 'none';
                    }, 5000);
                }
            })
            .catch(error => {
                console.error("Error:", error);
                if(errorElement) errorElement.style.display = 'block';
                if(successElement) successElement.style.display = 'none';
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
        }

        const errorMsg = document.getElementById('contact-error-msg');
        
        if (popupContactForm) {
            popupContactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                sendEmail(popupContactForm, successMsg, errorMsg, true);
            });
        }

        const footerForm = document.getElementById('footer-contact-form');
        const footerSuccess = document.getElementById('footer-success-msg');
        const footerError = document.getElementById('footer-error-msg');

        if (footerForm) {
            footerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                sendEmail(footerForm, footerSuccess, footerError, false);
            });
        }

    }
    // --- End Modal Logic ---

    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

});
