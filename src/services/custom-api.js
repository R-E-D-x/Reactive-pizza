import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)

export async function getMenu() {
    const { data, error } = await supabase
        .from('pizzas')
        .select('*')
    if (error) return null
    return data
}

export async function createOrder(newOrder) {
    const order_price = newOrder.cart.reduce((init, curr) => init + curr.unitPrice * curr.quantity, 0)
    const time = newOrder.priority ? 45 : 60
    const now = new Date()
    console.log(newOrder.priority)
    const order = {
        ...newOrder,
        order_price,
        estimateddelivery: new Date(now.getTime() + time * 60 * 1000),
        priority_price: 10,
        priority: newOrder.priority ? true : false
    }
    console.log(order)
    const { data, error } = await supabase
        .from('orders')
        .insert(order)
        .select()
    if (error) console.log(error)
    console.log(data)
    return data
}
export async function getOrder(id) {
    let { data: [order], error } = await supabase
        .from('orders')
        .select("*")
        // Filters
        .eq('id', String(id))
    if (error) console.log(error)
    console.log(new Date(order.estimateddelivery))
    return {
        ...order,
        status: new Date(order.estimateddelivery) < new Date() ? 'Delivered' : 'Preparing'
    }
}

// in the future:
// export async function updateOrder(id) {
// }
