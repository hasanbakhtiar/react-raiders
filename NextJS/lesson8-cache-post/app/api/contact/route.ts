export async function POST(request: Request) {
  const body = await request.json();
  const { fullname, phone, email } = body;

  return Response.json({
    message: 'Data transfer is successfully.',
    data: {
      fullname: fullname,
      phone: phone,
      email: email,
    },
  });
}
