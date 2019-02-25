import { author, bugs } from '../package.json'

// https://developer.github.com/v3/users/
interface GithubUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string
  blog: string
  location: string
  email: string
  hireable: boolean
  bio: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export const USERNAME = process.env.USERNAME || author
export const CAREER = 'Software Engineer'
export const BLOG_URL = `https://${USERNAME}.github.io/`
export const GITHUB_URL = `https://github.com/${USERNAME}`
export const FEEDBACK_URL = bugs.url

const GITHUB_API = `https://api.github.com/users/${USERNAME}`
const GITHUB_DATA: Promise<GithubUser> = fetch(GITHUB_API).then(res => res.json())
export const AVATAR_URL: Promise<string> = GITHUB_DATA.then(json => json['avatar_url'])
