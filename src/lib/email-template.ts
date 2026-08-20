interface TicketEmailData {
  firstName: string;
  lastName: string;
  email: string;
  ticketId: string;
  docType: string;
  docNumber: string;
  tshirtSize: string;
  qrCodeDataUri: string;
}

export function buildTicketEmailHtml(data: TicketEmailData): string {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tu entrada - Ng Conf Perú 2026</title>
</head>
<body style="margin:0;padding:0;background-color:#0A0A0C;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0A0A0C;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="padding:32px 40px;text-align:center;border-bottom:1px solid rgba(255,255,255,0.1);">
              <span style="font-size:28px;font-weight:800;color:#FFFFFF;letter-spacing:-0.5px;">
                Ng Conf <span style="color:#E5097F;">Per&uacute;</span>
              </span>
              <br/>
              <span style="font-size:14px;color:#888;margin-top:4px;display:inline-block;">9 y 10 de Octubre 2026 &bull; Lima, Per&uacute;</span>
            </td>
          </tr>

          <!-- Success Banner -->
          <tr>
            <td style="padding:40px 40px 24px;text-align:center;">
              <div style="width:64px;height:64px;border-radius:50%;background:rgba(229,9,127,0.12);margin:0 auto 20px;line-height:64px;">
                <span style="font-size:32px;color:#E5097F;">&#10003;</span>
              </div>
              <h1 style="margin:0;font-size:24px;font-weight:700;color:#FFFFFF;">
                &iexcl;Tu compra fue exitosa!
              </h1>
              <p style="margin:12px 0 0;font-size:15px;color:#999;line-height:1.5;">
                Hola <strong style="color:#fff;">${data.firstName}</strong>, tu entrada para la Ng Conf Per&uacute; 2026 est&aacute; confirmada.
              </p>
            </td>
          </tr>

          <!-- Ticket Card -->
          <tr>
            <td style="padding:0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#121215;border:1px solid rgba(229,9,127,0.3);border-radius:16px;overflow:hidden;">
                <!-- Ticket Header -->
                <tr>
                  <td style="padding:24px 28px 16px;border-bottom:1px dashed rgba(255,255,255,0.08);">
                    <span style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#E5097F;font-weight:600;">
                      Entrada General
                    </span>
                    <br/>
                    <span style="font-size:20px;font-weight:700;color:#fff;display:inline-block;margin-top:4px;">
                      Ng Conf Per&uacute; 2026
                    </span>
                  </td>
                </tr>

                <!-- Attendee Info -->
                <tr>
                  <td style="padding:20px 28px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%" style="vertical-align:top;padding-bottom:16px;">
                          <span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#666;display:block;margin-bottom:4px;">Asistente</span>
                          <span style="font-size:15px;color:#fff;font-weight:600;">${data.firstName} ${data.lastName}</span>
                        </td>
                        <td width="50%" style="vertical-align:top;padding-bottom:16px;">
                          <span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#666;display:block;margin-bottom:4px;">Documento</span>
                          <span style="font-size:15px;color:#fff;font-weight:600;">${data.docType}: ${data.docNumber}</span>
                        </td>
                      </tr>
                      <tr>
                        <td width="50%" style="vertical-align:top;padding-bottom:16px;">
                          <span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#666;display:block;margin-bottom:4px;">Talla de Camiseta</span>
                          <span style="font-size:15px;color:#fff;font-weight:600;">${data.tshirtSize}</span>
                        </td>
                        <td width="50%" style="vertical-align:top;padding-bottom:16px;">
                          <span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#666;display:block;margin-bottom:4px;">N&uacute;mero de Entrada</span>
                          <span style="font-size:13px;color:#E5097F;font-weight:700;font-family:monospace;">${data.ticketId}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Dashed Separator -->
                <tr>
                  <td style="padding:0 28px;">
                    <div style="border-top:1px dashed rgba(255,255,255,0.08);"></div>
                  </td>
                </tr>

                <!-- QR Code -->
                <tr>
                  <td style="padding:28px;text-align:center;">
                    <span style="font-size:12px;color:#888;display:block;margin-bottom:16px;text-transform:uppercase;letter-spacing:1.5px;">
                      Presenta este QR en el ingreso
                    </span>
                    <div style="background:#FFFFFF;border-radius:12px;display:inline-block;padding:16px;">
                      <img src="${data.qrCodeDataUri}" alt="QR Code" width="200" height="200" style="display:block;" />
                    </div>
                    <p style="margin:16px 0 0;font-size:12px;color:#555;">
                      Tambi&eacute;n puedes mostrar tu n&uacute;mero de entrada: <strong style="color:#E5097F;">${data.ticketId}</strong>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Event Details -->
          <tr>
            <td style="padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#121215;border-radius:12px;border:1px solid rgba(255,255,255,0.05);">
                <tr>
                  <td style="padding:24px;">
                    <span style="font-size:13px;color:#E5097F;font-weight:600;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:16px;">
                      Detalles del Evento
                    </span>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;">
                          <span style="color:#888;font-size:13px;">&#128197; Fecha:</span>
                          <span style="color:#fff;font-size:13px;font-weight:600;margin-left:8px;">9 y 10 de Octubre, 2026</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;">
                          <span style="color:#888;font-size:13px;">&#128205; Lugar:</span>
                          <span style="color:#fff;font-size:13px;font-weight:600;margin-left:8px;">UTEC - Jr. Medrano Silva 165, Barranco, Lima</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;">
                          <span style="color:#888;font-size:13px;">&#128337; Registro:</span>
                          <span style="color:#fff;font-size:13px;font-weight:600;margin-left:8px;">08:30 hrs</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.05);">
              <p style="margin:0;font-size:12px;color:#555;line-height:1.6;">
                Si tienes alg&uacute;n pregunta, escr&iacute;benos a
                <a href="mailto:angularcommunityperu@gmail.com" style="color:#E5097F;text-decoration:none;">angularcommunityperu@gmail.com</a>
              </p>
              <p style="margin:12px 0 0;font-size:11px;color:#333;">
                &copy; 2026 Ng Conf Per&uacute;. Todos los derechos reservados.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
