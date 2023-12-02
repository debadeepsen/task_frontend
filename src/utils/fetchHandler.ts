
export const post = async (url: string, body?: any) => {
  try {
    const result = await fetch(url, {
      method: 'post',
      body
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
