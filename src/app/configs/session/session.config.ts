export abstract class SessionConfig {
  session: {
    autoLogout: {
      enabled: boolean,
      timeout: number
    }
  }
}
