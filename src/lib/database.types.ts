export type Database = {
  public: {
    Tables: {
      members: {
        Row: {
          id: number
          first_name: string
          last_name: string
          email: string
          phone: string
          brand: string
          model: string
          license_plate: string
          city: string
          picture_url: string | null
          created_at?: string
        }
        Insert: {
          first_name: string
          last_name: string
          email: string
          phone: string
          brand: string
          model: string
          license_plate: string
          city: string
          picture_url?: string | null
        }
      }
    }
  }
}