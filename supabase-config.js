// ================================
// Supabase 云端数据库配置
// ================================
const SUPABASE_CONFIG = {
  url: "https://czbaqplpnzjmrbudaomp.supabase.co",
  key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiemFxcGxwbnpqbXJidWRhb21wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNTAyMjIsImV4cCI6MjA5NTcyNjIyMn0.R6B9dJBXUJArehVcu6fhS9ccZD4E2ueWrmMOgTmMMuI"
};

// 加载 Supabase SDK
(function() {
  const script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
  script.onload = function() {
    window.supabaseClient = window.supabase.createClient(
      SUPABASE_CONFIG.url, 
      SUPABASE_CONFIG.key
    );
    console.log('✅ Supabase 已加载，云端同步已启用');
  };
  document.head.appendChild(script);
})();