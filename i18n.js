// Internationalization support
class I18n {
    constructor() {
        this.currentLanguage = this.getLanguageFromURL() || 'nl'; // Default to Dutch
        this.translations = {};
        this.isLoaded = false;
        console.log('🌐 I18n constructor: language =', this.currentLanguage);
        this.loadTranslations();
    }

    getLanguageFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('lang');
    }

    getBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        return browserLang.startsWith('en') ? 'en' : 'nl';
    }

    async loadTranslations() {
        try {
            console.log('🌐 Loading translations for language:', this.currentLanguage);
            const response = await fetch(`/translations/${this.currentLanguage}.json`);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            this.translations = await response.json();
            console.log('✅ Translations loaded:', Object.keys(this.translations).length, 'keys');
            this.isLoaded = true;
            this.updatePageContent();
            this.updateLanguageSelector();
        } catch (error) {
            console.error('❌ Failed to load translations:', error);
            // Fallback to Dutch if English fails
            if (this.currentLanguage === 'en') {
                console.log('🔄 Falling back to Dutch...');
                this.currentLanguage = 'nl';
                this.loadTranslations();
            }
        }
    }

    t(key) {
        return this.translations[key] || key;
    }

    updatePageContent() {
        console.log('🔄 Updating page content with translations...');

        // Update title and meta description
        if (this.translations.title) {
            document.title = this.translations.title;
            console.log('📝 Updated title to:', document.title);
        }

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription && this.translations.meta_description) {
            metaDescription.content = this.translations.meta_description;
        }

        // Update page content
        const elementsToUpdate = document.querySelectorAll('[data-i18n]');
        console.log('🔍 Found', elementsToUpdate.length, 'elements to translate');

        let updatedCount = 0;
        elementsToUpdate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (key && this.translations[key]) {
                element.innerHTML = this.translations[key];
                updatedCount++;
            } else if (key) {
                console.warn('⚠️ Missing translation for key:', key);
            }
        });

        console.log('✅ Updated', updatedCount, 'elements with translations');
    }

    updateLanguageSelector() {
        const languageSelector = document.getElementById('language-selector');
        if (languageSelector) {
            const options = languageSelector.querySelectorAll('option');
            options.forEach(option => {
                if (option.value === this.currentLanguage) {
                    option.selected = true;
                }
            });
        }
    }

    switchLanguage(lang) {
        if (lang !== this.currentLanguage) {
            const url = new URL(window.location);
            url.searchParams.set('lang', lang);
            window.location.href = url.toString();
        }
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Initialize i18n when DOM is loaded
let i18n;
document.addEventListener('DOMContentLoaded', () => {
    i18n = new I18n();
});
