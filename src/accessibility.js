/**
 * Enhanced form accessibility and validation
 * Provides real-time feedback and better error handling
 */

(function () {
	'use strict';

	// Wait for DOM to be ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initializeAccessibility);
	} else {
		initializeAccessibility();
	}

	function initializeAccessibility() {
		const form = document.querySelector('form[name="closed-testing"]');
		const emailInput = document.getElementById('personal-email');
		const errorDiv = document.getElementById('email-error');

		if (!form || !emailInput || !errorDiv) {
			console.warn('Form elements not found for accessibility enhancement');
			return;
		}

		// Enhanced email validation
		function validateEmail(email) {
			// Basic email pattern that works with Google emails
			const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
			return emailRegex.test(email);
		}

		function showError(message) {
			errorDiv.textContent = message;
			errorDiv.setAttribute('aria-live', 'polite');
			emailInput.setAttribute('aria-invalid', 'true');
			emailInput.setAttribute('aria-describedby', 'email-help email-error');
		}

		function clearError() {
			errorDiv.textContent = '';
			emailInput.setAttribute('aria-invalid', 'false');
			emailInput.setAttribute('aria-describedby', 'email-help');
		}

		// Real-time validation on input
		emailInput.addEventListener('input', function () {
			const email = this.value.trim();

			// Clear errors if field is empty (let required attribute handle empty state)
			if (email === '') {
				clearError();
				return;
			}

			// Validate email format
			if (!validateEmail(email)) {
				showError('Please enter a valid email address.');
				return;
			}

			clearError();
		});

		// Enhanced form submission
		form.addEventListener('submit', function (e) {
			const email = emailInput.value.trim();

			// Final validation before submission
			if (!email) {
				e.preventDefault();
				showError('Email address is required.');
				emailInput.focus();
				return;
			}

			if (!validateEmail(email)) {
				e.preventDefault();
				showError('Please enter a valid email address.');
				emailInput.focus();
				return;
			}

			// If we get here, form is valid and will submit
			clearError();
		});

		// Announce form purpose to screen readers when focused
		form.addEventListener('focusin', function () {
			// This helps screen readers understand the form context
			const description = document.getElementById('form-description');
			if (description) {
				description.setAttribute('aria-live', 'polite');
			}
		});

		// Enhance keyboard navigation
		emailInput.addEventListener('keydown', function (e) {
			// Allow form submission on Enter key
			if (e.key === 'Enter') {
				form.querySelector('button[type="submit"]').click();
			}
		});
	}
})();
