# Facebook Login Window Test Plan

## Application Overview

Plan browser automation for Facebook's public login window. The Facebook site could not be inspected because the corporate network policy redirected access to a ZScaler block page. Scenarios therefore assume Facebook's standard login controls: email/phone, password, Log in, Forgotten password, and Create new account; confirm the current UI and selectors in an approved test environment before implementation. Use only a dedicated, authorized test account from secure environment variables, never real user credentials. Do not bypass CAPTCHA, rate limits, MFA, or access controls.

## Test Scenarios

### 1. Facebook Login Window

**Seed:** `tests/way2automation.spec.ts`

#### 1.1. Login page loads with expected controls

**File:** `tests/facebook-login-page.spec.ts`

**Steps:**
  1. In a fresh browser context, navigate to https://www.facebook.com/
    - expect: The browser remains on Facebook rather than an access-denied or interstitial page. If network policy blocks the site, report the environment block and do not treat it as an application failure.
  2. Locate the login form using accessible roles and labels; inspect the email/phone field, password field, Log in button, Forgotten password link, and Create new account action.
    - expect: The login fields and primary action are visible and enabled. Accessible labels identify the fields and controls.

#### 1.2. Authorized test account can sign in

**File:** `tests/facebook-login-valid-credentials.spec.ts`

**Steps:**
  1. Start from a fresh browser context and navigate to https://www.facebook.com/.
    - expect: The login window is visible.
  2. Read the dedicated test account email/phone and password from approved secret environment variables; fail explicitly if either variable is absent. Fill the fields and submit using the Log in action.
    - expect: Credentials are not printed, committed, or stored in test artifacts.
  3. If Facebook requests a supported MFA step or presents a CAPTCHA, stop the automated flow and report that the test requires an approved test-environment accommodation; do not bypass the challenge.
    - expect: The test does not attempt to evade authentication protections.
  4. After successful authentication, verify an authenticated-only account landmark or the test account's home view, then sign out and confirm the session returns to a logged-out state.
    - expect: The authorized test account reaches an authenticated state and is signed out during cleanup.

#### 1.3. Empty credentials show validation feedback

**File:** `tests/facebook-login-empty-fields.spec.ts`

**Steps:**
  1. In a fresh browser context, open the login page and leave both credential fields empty.
    - expect: The login window is available with both fields empty.
  2. Submit the login form.
    - expect: The page gives an appropriate validation or authentication error and does not authenticate.

#### 1.4. Invalid credentials are rejected

**File:** `tests/facebook-login-invalid-credentials.spec.ts`

**Steps:**
  1. In a fresh browser context, open the login page and enter a syntactically invalid email/phone value with a non-secret placeholder password.
    - expect: The login window accepts input without exposing or logging the password.
  2. Submit the form once and inspect the resulting page or inline feedback.
    - expect: No authenticated state is reached. The user receives an error or validation feedback without disclosing whether a real account exists.

#### 1.5. Forgotten password opens account recovery

**File:** `tests/facebook-password-recovery.spec.ts`

**Steps:**
  1. In a fresh browser context, navigate to the login page and activate Forgotten password.
    - expect: The browser opens Facebook's account-recovery flow or recovery dialog.
  2. Verify the recovery view contains an account-identification input or clear recovery instructions, without submitting a real user's information.
    - expect: Recovery controls are visible and accessible. The scenario does not initiate a real account recovery or change account credentials.

#### 1.6. Create account action opens registration

**File:** `tests/facebook-create-account-navigation.spec.ts`

**Steps:**
  1. In a fresh browser context, navigate to the login page and activate Create new account.
    - expect: The registration dialog or account-creation page opens and presents its initial registration controls.
  2. Do not enter personal data or submit account creation.
    - expect: The scenario verifies navigation only and does not create an account.
