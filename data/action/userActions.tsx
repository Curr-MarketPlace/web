"use server"
import {sql} from "@vercel/postgres"
export async function getProfileDTO(slug: string) {
    // Don't pass values, read back cached values, also solves context and easier to make it lazy
   
    // use a database API that supports safe templating of queries
    const rows = await sql`SELECT * FROM user WHERE slug = ${slug}`;
    const userData = rows;
   
   
    // only return the data relevant for this query and not everything
    // <https://www.w3.org/2001/tag/doc/APIMinimization>
    return null
    
  }