export const post = async (url: string, body?: any) => {
  console.log(Date())
  console.log({ body })
  const headers: HeadersInit = new Headers()
  headers.set('Content-Type', 'application/json')
  try {
    const result = await fetch(url, {
      method: 'post',
      headers,
      body: JSON.stringify(body)
    })
    const data = await result.json()

    return data
  } catch (e) {
    throw e
  }
}

export const get = async (url: string) => {
  try {
    const result = await fetch(url)
    const data = await result.json()

    return data
  } catch (e) {
    throw e
  }
}
