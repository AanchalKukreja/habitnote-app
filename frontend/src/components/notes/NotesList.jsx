import NoteCard from './NoteCard';
import useWindowSize from '../../hooks/useWindowSize';

const NotesList = ({ notes, onEdit, onDelete, searchTerm }) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile
        ? 'repeat(1, 1fr)'
        : isTablet
        ? 'repeat(2, 1fr)'
        : 'repeat(3, 1fr)',
      gap: isMobile ? '12px' : '20px',
    },
    emptyState: {
      textAlign: 'center',
      padding: '60px 20px',
    },
    emptyIcon: {
      fontSize: '48px',
      marginBottom: '16px',
    },
    emptyTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#171717',
      marginBottom: '8px',
    },
    emptyText: {
      fontSize: '14px',
      color: '#666666',
    },
  };

  if (notes.length === 0 && searchTerm) {
    return (
      <div style={styles.emptyState}>
        <h3 style={styles.emptyTitle}>No results found</h3>
        <p style={styles.emptyText}>No notes found for "{searchTerm}"</p>
      </div>
    );
  }

  if (notes.length === 0) {
    return (
      <div style={styles.emptyState}>
        <p style={styles.emptyIcon}>📝</p>
        <h3 style={styles.emptyTitle}>No notes yet</h3>
        <p style={styles.emptyText}>Click "Create Note" to add your first note!</p>
      </div>
    );
  }

  return (
    <div style={styles.grid}>
      {notes.map((note, index) => (
        <NoteCard
          key={note._id}
          note={note}
          index={index}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default NotesList;