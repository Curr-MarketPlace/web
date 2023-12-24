'use server'
import { sql } from '@vercel/postgres'

export async function getUsers () {
  const { rows } = await sql`SELECT * FROM users`

  if (!rows[0]) {
    return null
  }

  return rows
}

export async function getUser (address: string) {
  const { rows } = await sql`SELECT * FROM users WHERE address = ${address}`

  if (!rows[0]) {
    return null
  }

  return rows[0]
}

export async function updateUser (address: string, data: any) {
  console.log('data', data)

  const { rows } =
    await sql`UPDATE users SET username = ${data.username}, description = ${data.description} WHERE address = ${address} RETURNING *`

  if (!rows[0]) {
    return null
  }

  return rows[0]
}

export const getTopCreator = async (limit: 5) => {
  const { rows } =
    await sql`SELECT * FROM users where address is not null and username is not null ORDER BY RANDOM() LIMIT ${limit} `

  if (!rows[0]) {
    return null
  }

  return rows
}

export const getNFTCreators = async (limit: number) => {
  //TODO: kullanıcı nftye sahipse getir
}

// -- Table: public.users

// -- DROP TABLE IF EXISTS public.users;

// CREATE TABLE IF NOT EXISTS public.users
// (
//     id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
//     description C text
//     username character varying(50) COLLATE pg_catalog."default" NOT NULL,
//     address text COLLATE pg_catalog."default",
//     avatar text COLLATE pg_catalog."default",
//     CONSTRAINT users_pkey PRIMARY KEY (id),
//     CONSTRAINT users_username_key UNIQUE (username)
// )

// TABLESPACE pg_default;

// ALTER TABLE IF EXISTS public.users
//     OWNER to "default";

export const createUser = async (data: any) => {
  //make a random number range  1-5

  const random = Math.floor(Math.random() * 5) + 1
  // img: '/Ellipse3.png'

  const randomAvatar = '/Ellipse' + random + '.png'
  console.log('data', data)

  if (
    data.address === undefined ||
    data.address === null ||
    data.address === ''
  ) {
    return null
  }

  const isValid = await getUser(data.address)

  if (!isValid) {
    return null
  }

  const { rows } =
    await sql`INSERT INTO users (username, address, avatar, description) VALUES (${data.username}, ${data.address}, ${randomAvatar}, ${data.description}) RETURNING *`

  if (!rows[0]) {
    return null
  }

  return rows[0]
}
