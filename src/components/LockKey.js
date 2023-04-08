export default function LockKey() {
    const handleIconClick = () => {
        alert('Coming soon');
    };
    return <div className="lock_key" onClick={handleIconClick}>
        <img src="/assets/lock.png" height={32} width={32} alt="user" />
    </div>
}