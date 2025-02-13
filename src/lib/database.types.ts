export type Database = {
  public: {
    Tables: {
      members: {
        Row: {
          id: number
          first_name: string
          last_name: string
          birthdate: Date
          email: string
          phone: string
          brand: string
          model: string
          year: string
          license_plate: string
          city: string
          picture_url: string | null
          created_at?: string
        }
        Insert: {
          first_name: string
          last_name: string
          birthdate: Date
          email: string
          phone: string
          brand: string
          model: string
          year: string
          license_plate: string
          city: string
          picture_url?: string | null
        }
      }
    }
  }
}