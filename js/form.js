class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this);
    }

    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }

    displayError(message) {
        this.form.innerHTML = `<h1 class='error' style='text-align: center;'>${message}</h1>`;
    }

    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
        });
        return formObject;
    }

    validateForm() {
        const requiredFields = this.form.querySelectorAll("[required]");
        let isValid = true;

        requiredFields.forEach((field) => {
            const value = field.value.trim();
            if (!value) {
                isValid = false;
            }
        });

        return isValid;
    }

    onSubmission(evento) {
        evento.preventDefault();
        evento.target.disabled = true;
        evento.target.innerText = "Enviando....";
    }

    checkLastSubmission() {
        const lastSubmissionDate = localStorage.getItem('lastSubmissionDate');
        const today = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD

        // Verifica se existe uma data de envio e se é igual ao dia atual
        return lastSubmissionDate === today;
    }

    async sendForm(evento) {
        try {
            if (this.checkLastSubmission()) {
                this.displayError("Você já enviou uma mensagem hoje.");
                return; // Não prossegue se já enviou hoje
            }

            this.onSubmission(evento);

            if (!this.validateForm()) {
                this.displayError("Por favor, preencha todos os campos obrigatórios.");
                return;
            }

            await fetch(this.url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(this.getFormObject()),
            });

            // Armazena a data do último envio
            localStorage.setItem('lastSubmissionDate', new Date().toISOString().split('T')[0]);
            this.displaySuccess();
        } catch (error) {
            this.displayError("Não foi possível enviar sua mensagem.");
        }
    }

    init() {
        if (this.form) {
            this.formButton.addEventListener('click', this.sendForm);
        }
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success' style='text-align: center;'>Mensagem enviada!</h1>",
    error: "<h1 class='error' style='text-align: center;'>Não foi possível enviar sua mensagem.</h1>",
});

formSubmit.init();

