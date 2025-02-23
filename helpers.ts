export const BASE_URL = "https://portal.2k.com";

export class Miner {
  private cookie: string;

  constructor(cookie: string) {
    this.cookie = cookie;
  }

  public async getProfile(): Promise<UserProfile> {
    const response = await fetch(`${BASE_URL}/user/accounts/me`, {
      method: "GET",
      headers: {
        "cookie": this.cookie,
      },
    });

    const data = await response.json();

    return data;
  }

  public async changeDisplayName(displayName: string): Promise<void> {
    await fetch(`${BASE_URL}/user/accounts/me`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "cookie": this.cookie
      },
      body: JSON.stringify({ displayName }),
    });
  }
}


interface UserProfile {
  id: string;
  accountType: number;
  email: string;
  isEmailVerified: boolean;
  passwordVersion: number;
  dob: string;
  isDobVerified: boolean;
  firstName: string;
  lastName: string;
  displayName: string;
  subscribedNewsletters: string[];
  eligibleNewsletters: string[];
  locale: string;
  language: string;
  country: string;
  userSelectedCountry: string;
  createdOn: number;
  isDisplayNameSearchable: boolean;
  masterConsent: boolean;
  primaryAccountIds: Record<string, string>;
  isGloballyBanned: boolean;
  bannedAppIds: string[];
}

