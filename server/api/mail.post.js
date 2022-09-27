import { PasteClient, ExpireDate } from "pastebin-api";

export default defineEventHandler(async (event) => {
	const body = await useBody(event);

	let pasteBinUrl = "";
	if (body.message.length > 1000) {
    // Als het bericht meer dan 1000 tekens bevat POST het naar een PRIVE Pastebin post en zet deze in de Discord webhook
		const client = new PasteClient(useRuntimeConfig().PASTEBIN_CLIENT_ID);
		const token = await client.login({ name: useRuntimeConfig().PASTEBIN_USERNAME, password: useRuntimeConfig().PASTEBIN_PASSWORD });

		pasteBinUrl = await client.createPaste({
			code: body.message,
			expireDate: ExpireDate.Never,
			format: "text",
			publicity: 2,
			apiUserKey: token
		});
	}
	
    $fetch(useRuntimeConfig().DISCORD_WEBHOOK, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: 'finnpaes.nl',
            content:
              '<@241996357647335424>',
            embeds: [
              {
                color: 1735150,
                title: 'Contact Formulier',
                description: 'Er is een nieuw contact formulier binnen gekomen!',
                fields: [
                  {
                    name: 'Naam',
                    value: body.name,
                    inline: true
                  },
                  {
                    name: 'Email',
                    value: body.email,
                    inline: true
                  },
                  {
                    name: 'Bericht',
                    value: pasteBinUrl === '' ? body.message : pasteBinUrl,
                    inline: false
                  },
                ],

                footer: {
                  text: 'footer',
                },
              },
            ],
          }),
    });

    return true;
})