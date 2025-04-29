import Form from 'next/form'
 
export default function Page() {
  return (
    <Form action="/search">
      {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
      <input name="query" />
      <button type="submit">Submit Form Search 1</button>
    </Form>
  )
}

export default function Page() {
    return (
      <Form action="/search-page">
        <input name="query" />
        <button type="submit">Submit page</button>
      </Form>
    )
}