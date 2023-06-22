interface Utm {
  [key: string]: string | undefined
}

export default function useTickets() {
  const sendTelegram = async (name: string, phone: string, utm: Utm) => {
    const chatId = '-614457732'
    const token = '5863204726:AAEIIlPQhOoJIeM9UWUGe-8gjKJ752F7veY'
    const utmString = Object.entries(utm)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')
    const message = `Новая заявка с сайта\nИмя: ${name}\nТелефон: ${phone}\n${utmString}`
    const text = encodeURIComponent(message)
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`
    try {
      await fetch(url)
      return {
        message: 'Message sent',
      }
    } catch (e) {
      return {
        message: 'Error sending message',
      }
    }
  }

  const sendCRM = async (name: string, phone: string) => {
    try {
      const data = await $fetch('/api/macro', {
        method: 'POST',
        body: JSON.stringify({ name: name, phone: phone }),
      })
      console.log('message sent', data)
      return {
        message: 'Message sent',
      }
    } catch (e) {
      return {
        message: 'Error sending message',
      }
    }
  }
  return { sendTelegram, sendCRM }
}
