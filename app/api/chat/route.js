import axios from "axios";

export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + "/chat",
      { message }
    );

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        response: "Server error. Coba lagi nanti.",
      }),
      { status: 500 }
    );
  }
}
