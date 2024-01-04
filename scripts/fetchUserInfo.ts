import path from 'node:path'
import { author } from '../package.json'
import fs from 'node:fs/promises'
import { existsSync, mkdirSync } from 'node:fs'

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
  name: string | null
  company: string | null
  blog: string
  location: string
  email: string | null
  hireable: boolean
  bio: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

const OUTPUT_PATH = path.resolve('dist')
const USERNAME = process.env.USERNAME || author
const EMAIL = process.env.EMAIL
const CAREER = 'Software Engineer'

const GITHUB_API = `https://api.github.com/users/${USERNAME}`

const main = async () => {
  if (!existsSync(OUTPUT_PATH)) {
    mkdirSync(OUTPUT_PATH, { recursive: true })
  }

  const resp = await fetch(GITHUB_API)
  if (!resp.ok) {
    console.error(resp)
    throw new Error(`Error when fetch ${USERNAME}`)
  }
  const githubUser: GithubUser = await resp.json()

  const data = {
    name: githubUser.name ?? githubUser.login,
    career: CAREER,
    githubUrl: githubUser.html_url,
    avatarUrl: githubUser.avatar_url,
    blog: githubUser.blog,
    email: EMAIL ?? githubUser.email,
  }

  fs.writeFile(path.resolve(OUTPUT_PATH, 'user.json'), JSON.stringify(data, null, 2))
  // eslint-disable-next-line no-console
  console.log('Done!', data)
}

main()
